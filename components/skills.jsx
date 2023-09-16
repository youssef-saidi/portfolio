import React from 'react'
import { useTranslation } from 'react-i18next';
import Title from './title'
import OneSkills from './skills/OneSkills';

const Skills = () => {
    const [t] = useTranslation();

    return (
        <section className='flex-col items-center justify-center'>
            <div className='flex flex-col cursor-pointer items-center '>
                <Title title={t('title1')} color="textAnimateblack" />
            </div>
            <ul className='icons-container grid lg:grid-cols-6 grid-cols-3 justify-items-center z-10 mb-16 sm:mx-24'>
               
               
               
                <OneSkills title={"Html"} img={"/html.png"} bgcolor={"bg-orange-500"} animation_duration={"2000"} /> 
                <OneSkills title={"Css"} img={"/css.png"} bgcolor={"bg-blue-500"} animation_duration={"2200"} /> 
                <OneSkills title={"Tailwind"} img={"/tailwind.png"} bgcolor={"bg-sky-400"} animation_duration={"2500"} /> 
                <OneSkills title={"JavaScript"} img={"/js.png"} bgcolor={"bg-yellow-300"} animation_duration={"2700"} /> 
                <OneSkills title={"React"} img={"/react.png"} bgcolor={"bg-sky-500"} animation_duration={"3000"} /> 
                <OneSkills title={"Angular"} img={"/angular.png"} bgcolor={"bg-red-500"} animation_duration={"3000"} /> 

                <OneSkills title={"NodeJS"} img={"/node.png"} bgcolor={"bg-green-500"} animation_duration={"3200"} /> 
                <OneSkills title={"Python"} img={"/python.png"} bgcolor={"bg-blue-500"} animation_duration={"3500"} /> 
                <OneSkills title={"Java"} img={"/java.png"} bgcolor={"bg-red-500"} animation_duration={"3700"} /> 
                <OneSkills title={"C++"} img={"/c++.png"} bgcolor={"bg-blue-600"} animation_duration={"3800"} /> 
                <OneSkills title={"C"} img={"/c.png"} bgcolor={"bg-blue-700"} animation_duration={"3900"} /> 
                <OneSkills title={"Conception"} img={"/conception.png"} bgcolor={"bg-yellow-300"} animation_duration={"3900"} /> 

 

       
 
              
            </ul>
            <ul className='icons-container grid lg:grid-cols-6 grid-cols-3 justify-items-center z-10 mb-16 sm:mx-24'>
               
               
               
                           <OneSkills title={"Docker"} img={"/docker.png"} bgcolor={"bg-blue-600"} animation_duration={"3900"} /> 
               <OneSkills title={"Ansible"} img={"/ansible.png"} bgcolor={"bg-red-500"} animation_duration={"3900"} /> 
               <OneSkills title={"kubernetes"} img={"/kubernetes.png"} bgcolor={"bg-blue-600"} animation_duration={"4000"} /> 

               <OneSkills title={"Gitlab"} img={"/gitlab.png"} bgcolor={"bg-orange-500"} animation_duration={"4200"} /> 
               <OneSkills title={"Terraform"} img={"/terraform.png"} bgcolor={"bg-purple-500"} animation_duration={"4300"} /> 

               <OneSkills title={"Linux"} img={"/linux.png"} bgcolor={"bg-yellow-300"} animation_duration={"4500"} /> 


      

             
           </ul>
        </section>
    )
}

export default Skills