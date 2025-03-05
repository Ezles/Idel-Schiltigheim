import bcrypt from "bcryptjs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const verifyPassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};

rl.question("Entrez le mot de passe à hasher: ", async (inputPassword) => {
  try {
    if (!inputPassword) {
      console.log("Aucun mot de passe fourni. Opération annulée.");
      rl.close();
      return;
    }

    const hash = await hashPassword(inputPassword);

    console.log("\n--- RÉSULTAT ---");
    console.log("Hash bcrypt:", hash);

    const isValid = await verifyPassword(inputPassword, hash);
    console.log("Vérification du hash:", isValid ? "Succès" : "Échec");

    console.log(
      "\nCopiez ce hash dans la colonne password_hash de votre table admin_users."
    );

    rl.question(
      "\nSi vous avez un hash existant, collez-le ici pour le vérifier (ou appuyez sur Entrée pour quitter): ",
      async (existingHash) => {
        if (existingHash) {
          const isValidExisting = await verifyPassword(
            inputPassword,
            existingHash
          );
          console.log("\n--- VÉRIFICATION DU HASH EXISTANT ---");
          console.log("Résultat:", isValidExisting ? "Valide" : "Invalide");

          if (!isValidExisting) {
            console.log(
              "Le hash existant ne correspond pas au mot de passe. Utilisez le nouveau hash généré ci-dessus."
            );
          }
        }

        rl.close();
      }
    );
  } catch (error) {
    console.error("Erreur lors du hashage du mot de passe:", error);
    rl.close();
  }
});
