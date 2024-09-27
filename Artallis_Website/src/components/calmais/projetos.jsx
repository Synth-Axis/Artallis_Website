const projetos = [
  {
    id: 1,
    nome: "BEBÉTHOVEN",
    descricao: [
      "O Bebéthoven é um projeto que se destina a crianças dos 0 aos 3 anos de idade. Baseia- se na Teoria da Aprendizagem de Edwin Gordon. Este projeto foi criado em 2001, antes da criação do Conservatório Artallis, tendo sido juntamente com o projeto ABC da Música, os antecessores e os pilares da nossa escola.",
    ],
  },
  {
    id: 2,
    nome: "MÚSICOS DE PALMO E MEIO ",
    descricao: [
      "O projeto Músicos de Palmo e Meio é um projeto de expressão e iniciação musical para crianças dos 3 aos 5/6 anos de idade. Foi criado em 2008 e é um dos projetos do Artallis com mais sucesso e talvez o mais conhecido. Este projeto está implementado em todas as turmas de JI de todos os Agrupamentos Escolares do Concelho de Loures.",
      "Para além da rede pública, este projeto estende-se nas turmas de Jardim-de-infância de algumas IPSS do nosso Município, e em 2014/2015 este projeto a convite de outras instituições tem sido implementado em outras partes do nosso país.",
    ],
  },
  {
    id: 3,
    nome: "ABC DA MÚSICA",
    descricao: [
      "O ABC da Música é um projeto cuja criação remonta a 1998. Surgiu devido à lacuna existente no 1.º ciclo ao nível das expressões artísticas. Durante diversos anos funcionou em sistema de ensino coadjuvado. Este projeto começou por ser realizado em voluntariado, sendo mais tarde apoiado e completamente financiado pela Câmara Municipal de Loures, para ser desenvolvido nas escolas de 1.o ciclo do Agrupamento de Escolas de Catujal-Unhos.",
      "",
      "O Conservatório Artallis surgiu e ganhou força devido aos frutos recolhidos deste projeto. Com a aparição das Atividades de Enriquecimento Curricular o ABC da Música deixou de estar em funcionamento, pois deixou de ser financiado. Com o passar dos anos fomos verificando que as AEC’s não desempenhavam o papel na formação artística das crianças que o projeto ABC da Música em tempos desenvolvia. Muitos foram os professores do ensino regular que nos pediam para retomarmos o projeto, começaram a existir pedidos formais de algumas escolas para esse efeito, mas aquilo que nos fez resgatar o ABC da Música foi a constatação da falta de formação com que os alunos vinham do 1.º ciclo (a nível musical) quando estes prestavam provas para ingressar nas turmas de 5.º ano do ensino especializado da música. Assim em 2013/2014 o ABC da Música retomou o seu trabalho. ",
    ],
  },
  {
    id: 4,
    nome: "MUSICANDO",
    descricao: [
      "O Musicando é um projeto de expressão musical que funciona em ATL’s. Baseia-se sobretudo na pedagogia de Carl Orff. Foi criado em 2005.",
    ],
  },
  {
    id: 5,
    nome: "MUSICARTE",
    descricao: [
      "É um projeto que se destina às crianças e aos jovens portadores de deficiência. Foi criado em 2007 no seio da unidade de multideficiência da Escola n.º 4 de São João da Talha. Funciona em todas as unidades de multideficiência do Concelho de Loures.",
    ],
  },
  {
    id: 6,
    nome: "RABEQUINHAS",
    descricao: [
      "Projeto que se baseia na pedagogia de Shinichi Suzuki, consiste no ensino do violino e do violoncelo a crianças do pré-escolar e do 1.º ciclo. Projeto criado em 2012/2013, desenvolvido em algumas turmas de 1.º ciclo e de Jardim-de-Infância dos Agrupamentos de Escolas de Catujal- Unhos e da Bobadela.",
    ],
  },
  {
    id: 7,
    nome: "MÚSICAS DO MUNDO",
    descricao: [
      "É um projeto de etnomusicologia que se desenvolve em situações pontuais, destinado a crianças do 2.º e do 3.ºciclos.",
    ],
  },
  {
    id: 8,
    nome: "MUSIKÉ",
    descricao: [
      "É um projeto de etnomusicologia que se desenvolve em situações pontuais, aplicado a crianças do 2.º e do 3.º ciclo.",
    ],
  },
  {
    id: 9,
    nome: "MÚSICA PELA VIDA",
    descricao: [
      "Projeto que se destina à 3.ª Idade, desenvolve-se em alguns Centros de Dia de IPSS do Concelho de Loures.",
    ],
  },
  {
    id: 10,
    nome: "PROJETO AEC",
    descricao: [
      "Projeto criado em 2014, desenvolve-se no âmbito das Atividades de Enriquecimento Curricular nos Agrupamentos de Escolas de: Catujal-Unhos, Bobadela e Fanhões.",
    ],
  },
  {
    id: 11,
    nome: "PROJETO BRINCARTE",
    descricao: [
      "Projeto criado em 2019, desenvolve-se no âmbito das atividades de animação e apoio à família (AAAF) e na componente de apoio à família (CAF), mais especificamente, no agrupamento de escolas de Catujal-Unhos e Apelação.",
    ],
  },
  {
    id: 12,
    nome: "MUSICALMENTE (ARTALLIS)",
    descricao: [
      "Por meio da criação e produção de projetos artísticos transdisciplinares de teatro musical, promove o desenvolvimento das competências socio emocionais e instiga a inclusão social.",
    ],
  },
  {
    id: 13,
    nome: "CRESCENDO (ARTALLIS)",
    descricao: [
      "Através da prática musical coletiva em orquestras de percussão corporal, promove o desenvolvimento de atitudes de motivação, participação, atenção e concentração, facilitadoras da aprendizagem; potencia o desenvolvimento de capacidades e competências que estimulam o sucesso educativo; e favorece a inclusão social.",
    ],
  },
  {
    id: 14,
    nome: "EM HARMONIA (ATALLIS)",
    descricao: [
      "Por meio do desenvolvimento de práticas artísticas participativas e comunitárias, promove a construção identitária; desenvolve o sentido de pertença, cidadania e de convivialidade; potencia a coesão familiar e contribui para a inclusão social. A arte participativa e comunitária, é exploratória, radical e muito inovadora. Torna-se ainda mais inovador o facto de ser desenvolvida em ambiente escolar e de impulsionar a participação de alunos e respetivas famílias na cocriação artística.",
    ],
  },
  {
    id: 15,
    nome: "OPUS TUTTI (ARTALLIS)",
    descricao: [
      "Através de práticas coletivas de música em ensembles, orquestra, coros, grupos de música de câmara e outros agrupamentos musicais, pretende-se promover o desenvolvimento pessoal e social, integral e holístico; ajudar a definir pela positiva, percursos pessoais e sociais improváveis; capacitar e empoderar as crianças e os jovens para se expressarem musicalmente e servirem as suas comunidades através da arte; e treinar os músicos para se tornarem líderes de música na comunidade.",
    ],
  },
  {
    id: 16,
    nome: "CASA DOS AFETOS (ARTALLIS)",
    descricao: [
      "É muito inovador a existência de um espaço, em ambiente escolar, que tendo como base uma vivência familiar, satisfaça todas as necessidades básicas das crianças e dos jovens, criando assim condições e competências pessoais essenciais para uma vida autónoma, responsável e competente, bem como para a vivência de uma cidadania plena e ativa.",
    ],
  },
];

export default projetos;
