import oboe from "../../assets/media/svg/oboe.svg";
import flautas from "../../assets/media/svg/flautas.svg";
import fagote from "../../assets/media/svg/fagote.svg";
import palhetas_duplas from "../../assets/media/svg/palhetas_duplas.svg";
import clarinete from "../../assets/media/svg/clarinete.svg";
import saxofone from "../../assets/media/svg/saxofone.svg";
import trompete from "../../assets/media/svg/trompete.svg";
import trompas from "../../assets/media/svg/trompas.svg";
import trombone from "../../assets/media/svg/trombone.svg";
import tubas from "../../assets/media/svg/tubas.svg";
import pauta from "../../assets/media/svg/pauta.svg";

const actuacoes = [
  {
    id: 1,
    instrumento: "Ensemble Oboé ",
    foto: oboe,
    descricao:
      "Criado em 2021, o Ensemble de Oboés do CALL é dirigido pela professora Daniela Vicente. As memórias que nutrem uns pelos outros, levam-nos à entreajuda, amizade e partilha, que cultivam ao remendar palhetas partidas à última da hora, antes de entrarem em palco! Por isso, e por tantas outras peripécias, acreditam que a chave para tudo se resume a uma prática simples: o trabalho de equipa!",
  },
  {
    id: 2,
    instrumento: "Ensemble Flautas",
    foto: flautas,
    descricao:
      "O Ensemble de Flautas surgiu em 2015, é composto por alunos, antigos alunos e funcionários do CAL, e está a cargo artisticamente da professora Rossana Silva. Este grupo tem muita vontade de aprender, um grande amor pela música e caracteriza-se pelo companheirismo, mas sobretudo pela boa disposição que transparece em cada ensaio, em cada apresentação. Sempre prontos a ajudar o próximo e com um coração enorme, são capazes de nos surpreender e transmitir algo novo constantemente.",
  },
  {
    id: 3,
    instrumento: "Ensemble de Fagotes Kids",
    foto: fagote,
    descricao:
      "Com as suas raízes no ano letivo de 2021/2022, o Ensemble de Fagotes Kids é composto por alunos do CALL e é dirigido pelo professor Isaac Fernandes. Entusiastas, partilham memórias e alegrias, enquanto tocam e estudam em conjunto. Os seus ensaios são pautados por lanches e convívios, onde fortalecem as suas relações e magia. Humildes, estão sempre dispostos a aprender algo novo ou a aceitar um novo membro!",
  },
  {
    id: 4,
    instrumento: "Fagotástico",
    foto: fagote,
    descricao:
      "Ensemble Fagotástico, com a sua génese no ano de 2014, é dirigido artisticamente pelo professor Isaac Fernandes e é composto por alunos, antigos alunos e funcionários do CALL. Gulosos, adoram lanches e convívios! Os seus passeios refletem a sua diversão e barrigada de risadas. Dedicados à sua música (e à construção de palhetas), adoram tocar em conjunto.",
  },
  {
    id: 5,
    instrumento: "Ensemble Palhetas duplas",
    foto: palhetas_duplas,
    descricao:
      "Nascido no ano letivo de 2021/2022, é composto por alunos, antigos alunos e funcionários do CALL. Unidos, dedicam-se tanto ao seu grupo e à música como aos lanches e convívios! Refletindo a sua união, este agrupamento é uma junção do Ensemble Fagatástico e o Ensemble de Oboés e das suas paixões: convívio, comida e música! Dedicados e bem-dispostos, arranjam sempre forma de abrilhantar os seus concertos com os seus sorrisos. Acreditam que com esforço e dedicação, todos conseguirão alcançar os seus objetivos.",
  },
  {
    id: 6,
    instrumento: "Ensemble Clarinetes Kids",
    foto: clarinete,
    descricao:
      "Surgido em 2018, o Ensemble de Clarinetes Kids é composto por alunos e antigos alunos. É dirigido artisticamente pelo professor Fernando Dias. Sendo clarinetistas do CALL, não podiam deixar de ter sempre um assunto qualquer para conversar durante horas e horas! O riso e a brincadeira fazem parte do seu ADN de grupo e acompanha-os durante os ensaios e na música que fazem. Traquinas por natureza, são sempre aconselhados a canalizar a sua boa disposição para o estudo.",
  },
  {
    id: 7,
    instrumento: "Ensemble Clarinetes Júnior",
    foto: clarinete,
    descricao:
      "Com as suas raízes no ano de 2016, o Ensemble de Clarinetes Júnior do CALL é composto por alunos e antigos alunos, sendo dirigido artisticamente pelo professor Fernando Dias. Inspirando-se nos Calumeau, falam pelos cotovelos! Preguiçosos por natureza, gostam de desfrutar da companhia uns dos outros e da música que fazem em conjunto. Talentosos por natureza, fazem das semicolcheias as suas melhores amigas!",
  },
  {
    id: 8,
    instrumento: "Calumeau",
    foto: clarinete,
    descricao:
      "Calumeau, o Ensemble de Clarinetes do CALL, surgiu em 2015, sob a direção artística do professor Fernando Dias e é composto por alunos, antigos alunos e funcionários do CALL. Companheiros, adoram uma boa conversa (mesmo em compassos de espera) e de jogar Just Dance. Felizmente, dedicam-se à música e não à dança! Resmungões, sempre com um bom coração, cultivam a sua amizade com a música que criam e, mesmo com algumas traquinices pelo meio, gostam bastante uns dos outros!",
  },
  {
    id: 9,
    instrumento: "Saxoffon",
    foto: saxofone,
    descricao:
      "Saxoffon, o Ensemble de Saxofones do CALL, surgiu em 2015, sendo dirigido artisticamente pela professora Cátia Silva. É caracterizado pela sua alegria e união e é composto por alunos, antigos alunos e funcionários do CALL. Tendo passado por diversas peripécias e aventuras enquanto grupo, confiam na relação harmoniosa da amizade e da música para se divertirem ao máximo a tocar em conjunto. E, claro, sem nunca se terem esquecido de partituras nem de estantes.... Obviamente!",
  },
  {
    id: 10,
    instrumento: "Ensemble Saxofone Kids",
    foto: saxofone,
    descricao: "",
  },
  {
    id: 11,
    instrumento: "Ensemble Saxofone Júnior",
    foto: saxofone,
    descricao: "",
  },
  {
    id: 12,
    instrumento: "Ensemble Trompete Kids",
    foto: trompete,
    descricao:
      "Surgido em 2015, o Ensemble Trompete Kids, é composto por alunos e antigos alunos, e dirigido artisticamente pelo professor André Marçal. Com queda para a brincadeira e para adormecerem, claro que nunca se esqueceram dos trompetes para um concerto! Os sorrisos que partilham difundem-se nas peças que tocam e na energia que transmitem ao tocá-las. Ainda assim, mesmo crescidos, acredita-se que ainda têm de comer mais sopa! Pode ser que assim consigam ainda mais energia e o esquecimento se evapore!",
  },
  {
    id: 13,
    instrumento: "Ensemble Trompete Júnior",
    foto: trompete,
    descricao:
      "O Ensemble de Trompetes júnior surgiu em 2015, atualmente composto por alunos e antigos alunos do conservatório, é dirigido artisticamente pelo professor André Marçal. Os aspetos que mais caracterizam este pequeno ensemble são a energia, a entreajuda, a união e a resiliência. Nos ensaios há espaço para trabalhar, brincar, descontrair e conversar sobre as novidades que cada elemento traz para contar. O Ensemble Júnior é um patamar importante na preparação para tocar em grupo, quer seja no Ensemble dos irmãos mais velhos, os Bucinarum ou até mesmo na Orquestra do Conservatório.",
  },
  {
    id: 14,
    instrumento: "Ensemble Trompete Júnior",
    foto: trompete,
    descricao:
      "O Ensemble de Trompetes júnior surgiu em 2015, atualmente composto por alunos e antigos alunos do conservatório, é dirigido artisticamente pelo professor André Marçal. Os aspetos que mais caracterizam este pequeno ensemble são a energia, a entreajuda, a união e a resiliência. Nos ensaios há espaço para trabalhar, brincar, descontrair e conversar sobre as novidades que cada elemento traz para contar. O Ensemble Júnior é um patamar importante na preparação para tocar em grupo, quer seja no Ensemble dos irmãos mais velhos, os Bucinarum ou até mesmo na Orquestra do Conservatório.",
  },
  {
    id: 15,
    instrumento: "Bucinarum",
    foto: trompete,
    descricao:
      "Bucinarum, o Ensemble de Trompetes do CALL, começou a sua estridente aventura em 2012 e é dirigido artisticamente pelo professor André Marçal. É composto por alunos, antigos alunos e funcionários do CALL. Com audições caricatas e brincadeiras infindáveis, este grupo caracteriza-se pela coragem, reverência e audácia plantadas nos corações de quem os ouve. As interpretações dos Bucinarum são irreverentes e carregadas de energia, aliados sempre a um sorriso autêntico e contagiante.",
  },
  {
    id: 16,
    instrumento: "Ensemble Trompas Kids",
    foto: trompas,
    descricao:
      "O Ensemble de Trompas Kids, surgiu em 2015, sob a direção artística do Professor Fausto Mirrado. Este foi criado devido ao exponencial crescimento da classe de trompas e é composto por alunos mais novos do CALL. Estes pequerruchos de aspeto ternurento, são uns traquinas que não deixam uma piada passar ao lado. Fora isso, caracterizam-se pela sua bondade e pelo bom humor, sempre disposto a uma bela brincadeira e a fazer boa música juntos. São muito versáteis no que diz respeito ao reportório, mas os temas de filmes são os seus prediletos. Venham dar uma força a estes jovens artistas, as palminhas são o seu alimento!",
  },
  {
    id: 17,
    instrumento: "Ensemble Trompas Júnior",
    foto: trompas,
    descricao:
      "O Ensemble de Trompas júnior, surgiu em 2015, sob a direção artística do Professor Fausto Mirrado, como resposta ao rápido crescimento da classe de trompas, sendo composto por alunos e antigos alunos desta classe. De um modo geral são tímidos, envergonhados e carinhosos, quer dizer… até prova em contrário!!! Quando o braço cansa, as trompas caem que nem pardais, mas basta um incentivo para as elevarem quem nem “Bells up” e tocarem com a garra que os caracteriza. A luta para deixar a preguiça de lado é constante, mas pouco a pouco as conquistas vão acontecendo.",
  },
  {
    id: 18,
    instrumento: "Hornama",
    foto: trompas,
    descricao:
      "É em 2012, que a história dos Hornama, o Ensemble de Trompas do CALL, tem o seu início, sob a direção artística do Professor Fausto Mirrado. Neste momento, é composto unicamente, por antigos alunos e professores do CALL. São um grupo muito heterógeno, mas no que toca a fazer música juntos, a linguagem é una. Em concerto tremem que nem “varas verdes”, mas bem sabem que podem contar uns com os outros nos momentos de aflição. Os Hornama caracterizam-se pela sua humildade, entrega, resiliência e longos abraços!!! O reportório que interpretam é vasto e irreverente, e no que respeita a salas de concertos, não são esquisitos!!! Venham conhecer a bela história desta família de coração através da sua música…",
  },
  {
    id: 19,
    instrumento: "Ensemble Trombone Kids",
    foto: trombone,
    descricao:
      "É em 2012, que a história dos Hornama, o Ensemble de Trompas do CALL, tem o seu início, sob a direção artística do Professor Fausto Mirrado. Neste momento, é composto unicamente, por antigos alunos e professores do CALL. São um grupo muito heterógeno, mas no que toca a fazer música juntos, a linguagem é una. Em concerto tremem que nem “varas verdes”, mas bem sabem que podem contar uns com os outros nos momentos de aflição. Os Hornama caracterizam-se pela sua humildade, entrega, resiliência e longos abraços!!! O reportório que interpretam é vasto e irreverente, e no que respeita a salas de concertos, não são esquisitos!!! Venham conhecer a bela história desta família de coração através da sua música…",
  },
  {
    id: 20,
    instrumento: "Ensemble Trombones",
    foto: trombone,
    descricao:
      "O Ensemble de Trombones surgiu em 2015, sob a direção artística do professor Hélder Rodrigues e nele juntava um grupo de trombonistas apaixonados pela música. Reunindo-se regularmente, não só para fazer escalas, falar de sacabuxas ou queixarem-se do preço dos óleos, também exploram novos panoramas musicais e aprimoram a sua destreza performativa em conjunto. Confessam que quando se juntam, que se divertem e cultivam amizades para a vida, mas que quando tocam juntos, se sentem em sintonia, deixando que a música no seu todo inunde os seus corações.",
  },
  {
    id: 21,
    instrumento: "Ensemble Tubas",
    foto: tubas,
    descricao:
      "TubAllis é o Ensemble de Tubas do CAL, criado em 2020, sob a direção artística do professor Pedro Oliveira. Composto por alunos do CALL, é caracterizado pela sua fome e pelas encomendas de pizzas! Com ensaios à pressão, adoram tocar juntos e, quando adormecem nos compassos de espera, um bom ronco é o suficiente para acordá-los! Unidos, criativos e sinceros, acreditam que juntos são mais fortes!",
  },
  {
    id: 22,
    instrumento: "Ensemble de Graves",
    foto: tubas,
    descricao:
      "Agrupamento criado em 2015, é composto por músicos talentosos no eufónio, no trombone e na tuba, possuidores de um som pujante, um requintado paladar e a paixão tanto por uma boa comida como por uma boa plateia. Quem os conhece, afirma que quando não estão praticando juntos, eles estão explorando e partilhando novas trends culinárias, mas quando se trata de tocar música, eles são igualmente apaixonados e dedicados. Em concerto, todos juntos fazem o chão tremer, com seus instrumentos graves, eles trazem um peso e profundidade ao som que é simplesmente arrebatador, único e emocionante.",
  },
  {
    id: 23,
    instrumento: "Ensemble Percussão Kids",
    foto: pauta,
    descricao:
      "O grupo dos percussionistas mais pequeninos do Conservatório Artallis sob a orientação artística do professor David Ribeiro. Desde 2016 que semanalmente se reúnem para tocar juntos, mas também para se divertirem e brincar muito. Aqui se constroem amizades para a vida toda, e nada melhor do que usar a música e a percussão para marcar as marcar nos seus corações. Não se deixem enganar, são os mais pequeninos, mas possuem muita genica para tocar tão forte como os seus irmãos mais velhos.",
  },
  {
    id: 24,
    instrumento: "Ensemble Percussão Júnior",
    foto: pauta,
    descricao:
      "Mais que um ensemble é um grupo de amigos apaixonados pela percussão. O Ensemble Percussão Júnior é composto atualmente por 12 elementos, e sob a direção artística do professor David Ribeiro, reúne todas as semanas para tocar e aprender uns com os outros. Juntos desde 2016, contabilizam uma média de idades de 14 anos. Já nem todos estudam música oficialmente, mas a paixão pelo conservatório e pela percussão faz com que queiram ficar aqui para sempre, representando um lugar único e especial.",
  },
  {
    id: 25,
    instrumento: "Tympana",
    foto: pauta,
    descricao:
      "Os Tympana foram o primeiro ensemble de percussão que surgiu no Conservatório Artallis, definindo-se atualmente como um grupo de 12 amigos apaixonados pela percussão. Todos diferentes, mas todos especiais, são o reflexo da imensidão tímbrica que só o nosso instrumento oferece. Cresceram juntos e juntos querem levar a percussão ao ouvido das pessoas, mas a cima de tudo, utilizar a música para mudar o pequenino mundo em que se inserem e, assim, mudarem o mundo de todos para melhor!",
  },
  {
    id: 26,
    instrumento: "OrKestra PhilarmóniCal",
    foto: pauta,
    descricao:
      "A OrKestra PhilarmóniCal é uma orquestra de todos, com todos e para todos, que através da música contribui para o desenvolvimento humano, promove a capacitação comunitária e instiga a transformação social. A constituição desta orquestra com 135 elementos, integra os alunos e antigos alunos do Conservatório d’ Artes de Loures. A orquestra envolve predominantemente crianças e jovens oriundos de contextos sociais carenciados, inclui músicos com deficiência e alberga diversas culturas e diferentes etnias, o seu lema é “O todo é maior que a soma das partes”. A OrKestra PhilarmóniCal estreou-se em 2003, realizou várias centenas de concertos, alguns destes nas mais prestigiadas salas de concerto, teve o privilégio de tocar com bastantes solistas de renome, efetuou diversos estágios e digressões, e teve a honra de muitos compositores lhe dedicarem obras musicais. Desde o seu início, a Orkestra PhilarmóniCal, é orientada por Elisabete Fernandes.",
  },
  {
    id: 27,
    instrumento: "OPC Pro",
    foto: pauta,
    descricao:
      "Surgida no ano letivo de 2021, a Orquestra de Percussão Corporal Pro teve a sua génese no ano letivo de 2016/2017. Composta por alunos, antigos alunos e funcionários do CALL é dirigida artisticamente pelo professor Isaac Fernandes. Orgulhando-se da sua história, este agrupamento surgiu pela necessidade de se poder fazer música, mesmo sem instrumentos musicais.",
  },
];

export default actuacoes;
