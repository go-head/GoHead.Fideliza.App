import { User } from "../contexts/Auth";

interface Response {
  token: string;
  user: User;
}
async function signIn(email: string, password: string): Promise<Response> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(password === "123"){
                resolve({
                    token: 'kjhsads9d8f7s0odfkjsdnf98y493tr3498fhn493859th34',
                    user: {
                        email,
                        name: 'Mauricio'
                    }
                });
            } else{
                reject( new Error("Credenciais erradas"));
            }
        }, 1000);
    })
    
}

export const authService=  { signIn };