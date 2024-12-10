import { Image, Text } from "react-native"
import {s} from "./Header.style"
import logoImg from "../../assets/logo.png"

export function Header(){
    return <>
    <Image style = {s.img} source= {logoImg} resizeMode="contain"></Image>
    <Text style = {s.subTitle}>you probagly have someting to do</Text>
    
    </>

}