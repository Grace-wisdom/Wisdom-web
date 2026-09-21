import {
  BookOpen,
  Laptop,
  Medal,
  HeartHandshake
} from "lucide-react";

const features=[
  {
    icon:BookOpen,
    title:"Academic Excellence",
    desc:"Comprehensive curriculum for lifelong success."
  },
  {
    icon:Laptop,
    title:"Modern Infrastructure",
    desc:"Smart classrooms and digital learning."
  },
  {
    icon:Medal,
    title:"Sports & Activities",
    desc:"Indoor and outdoor sports with expert coaching."
  },
  {
    icon:HeartHandshake,
    title:"Values & Discipline",
    desc:"Character building through education and ethics."
  }
];

export default function Features(){
  return(
    <section className="py-24 bg-white">

      <div className="text-center mb-16">
        <p className="uppercase tracking-[5px] text-yellow-500 font-bold">
          Why Choose Wisdom?
        </p>

        <h2 className="text-5xl font-black text-[#082F67] mt-3">
          Excellence in Every Step
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {features.map((item,index)=>{
          const Icon=item.icon;

          return(
            <div key={index}
              className="rounded-3xl bg-slate-50 p-8 hover:bg-[#082F67] hover:text-white transition duration-500 group">

              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center">
                <Icon size={30} className="text-[#082F67]"/>
              </div>

              <h3 className="font-bold text-xl mt-6">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-500 group-hover:text-gray-200">
                {item.desc}
              </p>

            </div>
          )
        })}
      </div>

    </section>
  )
}