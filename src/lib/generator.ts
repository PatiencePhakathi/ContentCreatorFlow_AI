import type {ContentForm} from '../types';

export function buildOptimisedPrompt(f: ContentForm) {
  return `You are an expert ${f.type.toLowerCase()} writer. Create content about "${f.topic}" for ${f.audience || 'a professional general audience'}. Use a ${f.tone.toLowerCase()} tone and ${f.style || 'clear, natural'} writing style. Keep the output ${f.length.toLowerCase()} and write entirely in ${f.language}. Do not translate only headings or isolated phrases; produce the complete response in ${f.language}. Incorporate these keywords where natural: ${f.keywords || 'none specified'}. Additional requirements: ${f.instructions || 'Make the content useful, specific, polished and easy to read. Avoid generic filler.'}`;
}

function english(f: ContentForm) {
  const intro = f.tone === 'Formal'
    ? 'Dear Hiring Manager,'
    : f.type === 'Professional email'
      ? `Subject: ${f.topic}`
      : `Here is a practical perspective on ${f.topic}.`;

  const body = f.type === 'LinkedIn post'
    ? `If you are building your career, the goal is not to know everything from day one. It is to keep learning, apply what you know, and turn new tools into better workflows.\n\nFor ${f.audience || 'professionals'}, a useful starting point is to connect learning with real outcomes: automate repetitive work, communicate ideas clearly, and use technology to explore better solutions.\n\nThe most valuable skill is still judgment — knowing what to ask, what to verify, and what to improve.\n\nWhat would you try first?`
    : f.type === 'Social media caption'
      ? `Big goals become easier when you turn them into consistent actions. 🚀\n\n${f.topic} is a reminder that progress comes from learning, experimenting and showing up. Save this for later and share it with someone who needs the reminder.`
      : f.type === 'Professional email'
        ? `Thank you for taking the time to connect with me regarding ${f.topic}. I appreciated the opportunity to learn more and share how I could contribute.\n\nI remain interested in the opportunity and would be happy to provide any additional information required.\n\nKind regards,\nPatience`
        : f.type === 'Cover letter'
          ? `I am excited to apply for an opportunity related to ${f.topic}. As a software development graduate, I bring a practical foundation in web and application development, a strong willingness to learn, and experience turning ideas into working projects.\n\nI enjoy solving problems, collaborating with others and improving solutions through feedback. I would value the opportunity to grow while contributing meaningful work to your organisation.\n\nThank you for considering my application.`
          : f.type === 'Blog post'
            ? `Technology is changing how people learn, work and communicate. ${f.topic} is particularly useful because it connects new capabilities with everyday problems.\n\nFor ${f.audience || 'modern professionals'}, the strongest approach is practical: start with one repeatable task, define what success looks like, and review the output before using it.\n\nThe result is not simply faster work. It is a workflow that leaves more room for judgment, creativity and continuous improvement.`
            : f.type === 'Product description'
              ? `${f.topic} is designed for people who want a practical solution without unnecessary complexity.\n\nKey benefits:\n• Easy to use\n• Designed around everyday needs\n• Clear, modern and reliable\n\nA simple choice for ${f.audience || 'customers'} who value convenience and quality.`
              : `${f.topic} is an opportunity to communicate a clear idea with confidence. For ${f.audience || 'your audience'}, focus on the value, make the message specific, and give readers a reason to act.\n\nUse a ${f.tone.toLowerCase()} voice, keep the language natural, and connect the message to a real outcome. This approach helps the content feel useful rather than generic.`;

  return `${intro}\n\n${body}`;
}

function isiZulu(f: ContentForm) {
  const topic = f.topic;
  if (f.type === 'Professional email') {
    return `Isihloko: ${topic}\n\nNgiyabonga ngokuthatha isikhathi sokuxhumana nami mayelana ne-${topic}. Ngiyalazisa leli thuba lokufunda kabanzi nokwabelana ngendlela engingaba negalelo ngayo.\n\nNgisathanda leli thuba futhi ngizokujabulela ukunikeza olunye ulwazi oludingekayo.\n\nOzithobayo,\nPatience`;
  }
  if (f.type === 'Cover letter') {
    return `Mphathi Wokuqasha,\n\nNgijabule ukufaka isicelo sethuba elihlobene ne-${topic}. Njengomuntu oneziqu ze-software development, nginolwazi oluyisisekelo ekwakheni izinhlelo zokusebenza, ngizimisele ukufunda, futhi ngiyakwazi ukuguqula imibono ibe amaphrojekthi asebenzayo.\n\nNgiyakujabulela ukuxazulula izinkinga, ukusebenza nabanye nokuthuthukisa izixazululo ngokusebenzisa impendulo. Ngingalithokozela ithuba lokukhula ngenkathi ngiletha igalelo elibalulekile enhlanganweni yakho.\n\nNgiyabonga ngokucabangela isicelo sami.`;
  }
  if (f.type === 'Social media caption') {
    return `Izinjongo ezinkulu ziba lula uma siziguqula zibe izenzo ezincane eziqhubekayo. 🚀\n\n${topic} kusikhumbuza ukuthi inqubekela phambili idinga ukufunda, ukuzama nokungayeki. Gcina lokhu ukuze ukubheke futhi wabelane ngakho nomuntu odinga lesi sikhuthazo.`;
  }
  return `Nansi indlela ewusizo yokucabanga nge-${topic}.\n\nKubantu ${f.audience || 'abasebenza emikhakheni yobungcweti'}, kubalulekile ukuxhumanisa umbono nemiphumela yangempela. Sebenzisa ubuchwepheshe ngendlela ecacile, hlola ulwazi ngaphambi kokulusebenzisa, futhi uqhubeke ufunda.\n\nInto ebaluleke kakhulu ukwazi ukuthi yini okufanele uyibuze, yini okufanele uyiqinisekise, nokuthi yini okufanele uyithuthukise.\n\nYini ongathanda ukuyizama kuqala?`;
}

function afrikaans(f: ContentForm) {
  const topic = f.topic;
  if (f.type === 'Professional email') {
    return `Onderwerp: ${topic}\n\nBaie dankie dat u die tyd geneem het om met my te skakel oor ${topic}. Ek waardeer die geleentheid om meer te leer en te deel hoe ek kan bydra.\n\nEk stel steeds belang in die geleentheid en sal graag enige verdere inligting verskaf wat benodig word.\n\nVriendelike groete,\nPatience`;
  }
  if (f.type === 'Cover letter') {
    return `Geagte Aanstellingsbestuurder,\n\nEk is opgewonde om aansoek te doen vir 'n geleentheid wat verband hou met ${topic}. As 'n sagteware-ontwikkelingsgegradueerde het ek 'n praktiese grondslag in web- en toepassingsontwikkeling, 'n sterk bereidwilligheid om te leer, en ervaring om idees in werkende projekte te omskep.\n\nEk geniet dit om probleme op te los, met ander saam te werk en oplossings deur terugvoer te verbeter. Ek sal die geleentheid waardeer om te groei terwyl ek betekenisvolle werk tot u organisasie bydra.\n\nDankie dat u my aansoek oorweeg.`;
  }
  if (f.type === 'Social media caption') {
    return `Groot doelwitte word makliker wanneer jy dit in konsekwente aksies verander. 🚀\n\n${topic} herinner ons daaraan dat vooruitgang kom deur te leer, te eksperimenteer en aan te hou. Stoor dit vir later en deel dit met iemand wat die herinnering nodig het.`;
  }
  return `Hier is 'n praktiese perspektief op ${topic}.\n\nVir ${f.audience || 'professionele mense'} is dit belangrik om nuwe idees aan werklike uitkomste te koppel. Gebruik tegnologie doelbewus, kommunikeer duidelik en verifieer belangrike inligting voordat jy daarop staatmaak.\n\nDie belangrikste vaardigheid bly goeie oordeel — om te weet wat om te vra, wat om te verifieer en wat om te verbeter.\n\nWat sal jy eerste probeer?`;
}

export function mockGenerate(f: ContentForm) {
  if (f.language === 'isiZulu') return isiZulu(f);
  if (f.language === 'Afrikaans') return afrikaans(f);
  return english(f);
}
