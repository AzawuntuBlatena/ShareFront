

import Heator from "@/components/Layout/Heator"
import Aboutus from "@/components/Aboutus"
import Contact from "@/components/Contact"
import News from "@/components/News"
import Section from "@/components/Section"




export default function Home() {
  return (
  <>
    <Heator>
    <Section/>
    <Aboutus/>
    <News/>
    <Contact/>
    </Heator>
   
  </>
  )
}
