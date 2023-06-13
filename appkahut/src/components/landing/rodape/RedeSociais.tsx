import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react"
import RedeSocial from "./RedeSocial"

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial icone={<IconBrandYoutube />} url="https://www.youtube.com/@dkahut_dev8192" />
            <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/dagmar-r-kahut/" />
            <RedeSocial icone={<IconBrandFacebook />} url="https://www.facebook.com/dago.kahut" />
            <RedeSocial icone={<IconBrandGithub />} url="https://github.com/kahut-gdd" />
        </div>
    )
}