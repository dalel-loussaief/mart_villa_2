
import React from "react";
import { useParams } from "react-router-dom"; // Ajout de l'import useParams

const BlogDetails = () => {
  // Utilisation de useParams pour récupérer l'ID de l'article depuis l'URL
  const { id } = useParams();

  // Utilisation de l'ID pour récupérer les données de l'article depuis votre source de données (API, state, etc.)
  // Remplacez cette logique avec la façon dont vous récupérez les détails de l'article dans votre application
  const articleDetails = { title: "Article Title", content: "Article Content" }; // Exemple de données d'article

  return (
    <div>
      <h1>daaaa</h1>
      
    </div>
  );
};

export default BlogDetails;

  