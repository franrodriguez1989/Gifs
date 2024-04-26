import { Link } from "wouter";
export default function Detail({params}){
    const {id}= params
    return <>
    <Link to='http://localhost:3000'>Ir al principio</Link>
    <h1>{id}</h1>
    </>
}