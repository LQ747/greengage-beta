export class Feedback {
    firstname: string;
    lastname: string;
    email: string;
    password:string;
    phone:number;
    message:string;
    exportType:string;
    agree: boolean;
}

export const ExportType = ['None', 'Tel','Email'];
