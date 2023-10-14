import JWT from "jsonwebtoken";

export default function genereateJwt(payload){
  return JWT.sign(payload, process.env.SECRET_TOKEN, { expiresIn: "14d" });
}