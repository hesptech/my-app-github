
export interface UserCodes {
    id_codice: number;
    acc_cod: string;
    tipo: number;
}
export interface UserData {
    id_user: number;
    codice: number;
    nome: string;
    cognome: string;
    email: string;
    username: string;
    password: string;
    active: number;
    pwd_date: Date;
}
