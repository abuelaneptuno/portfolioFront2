import { Usuario } from "./Usuario";
export interface Estudio {
    idestudio: number; 
    titulo: string;
    institucion: string; 
    estado: string; 
    usuario: Usuario;
  }