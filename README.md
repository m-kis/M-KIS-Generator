# M-KIS Generator est un Générateur de scripts Terraform pour AWS 

Ce projet est une application web qui génère des scripts Terraform pour déployer des ressources AWS, basé sur les entrées utilisateur dans un formulaire web. L'application est construite avec Node.js et Express.js.
Il est en cours de dev et totalement opensource, n'hésitez pas à contribuer et à pull request.
## Fonctionnalités
- Génération de scripts Terraform pour les fournisseurs AWS (pour le moment), les instances EC2, les instances RDS et les buckets S3.
- Interface utilisateur intuitive basée sur un formulaire pour recueillir les informations nécessaires à la génération du script.
- Ajout dynamique de règles de sécurité pour les instances EC2.

## Prérequis

- [Node.js](https://nodejs.org) et [npm](https://npmjs.com) (habituellement installés ensemble).
- [Terraform](https://www.terraform.io/) installé localement si vous voulez exécuter les scripts générés.

## Installation

1. Clonez ce répertoire sur votre machine locale :
   ```
   git clone https://github.com/m-kis/M-KIS-Generator.git
   ```

2. Naviguez vers le répertoire du projet :
   ```
   cd M-KIS-Generator
   ```

3. Installez les dépendances du projet :
   ```
   npm install
   ```

4. Lancez l'application :
   ```
   npm start
   ```

5. Ouvrez votre navigateur web et naviguez vers `http://localhost:3000` pour voir l'application en action.

## Utilisation

1. Remplissez le formulaire avec les détails de votre déploiement AWS.
2. Cliquez sur le bouton "Générer" pour générer le script Terraform.
3. Le script Terraform généré sera affiché sur la page. Vous pouvez le copier et l'enregistrer dans un fichier `.tf` sur votre machine locale.
4. Exécutez le script Terraform avec la commande `terraform apply` pour déployer vos ressources AWS.

## Contribution

Les contributions à ce projet sont les bienvenues ! Veuillez créer une issue pour discuter de vos idées, ou faites un pull request avec vos modifications.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
