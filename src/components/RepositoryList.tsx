import { RepositoryItem } from "./ReposititoryItem";
import '../styles/repositories.scss';
import { useState,useEffect } from "react";

interface Repository {
   name:string;
   description: string; 
   html_url: string;
}

export function RepositoryList(){

  const [repositories,seRepositories] = useState<Repository[]>([]);
    

  useEffect(()=> {
    fetch('https://api.github.com/users/georgesbrj/repos')
   .then(response => response.json())
   .then(data => seRepositories(data))
  },[])

    return (
      <section className="repository-list">
          <h1>Lista de repositorios</h1>

          <ul>
            {repositories.map(repository => {
              return <RepositoryItem key={repository.name} repository={repository} />
            })}
            
           
          </ul>
      </section>
    );
}