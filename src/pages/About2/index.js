/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
//import { Link } from "react-router-dom";
import "./about.css";

import Header from '../../components/Header'

import Title from '../../components/Title'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'

function About2() {
  return (
   
    <div className="container">
      <Header />

      <div className="content">

        <Title name="Sobre o Projeto">
          <Link to="/dashboard">
             <FiArrowLeft size={45} />
          </Link>
        </Title>

        <div className="tituloIN">
        Sobre o Farm UFPR 4.0
        </div>
      <div className="projetovinculadoIN">
        <h2>
          Projeto de tese vinculado ao Programa de Pós Graduação em Gestão da
          Informação (PPGGI) da UFPR
        </h2>
        <h3>
          Linha de Pesquisa: Informação, tecnologia e gestão
        </h3>
        <div className="tituloProjetoIN">
          <h3>
            ARQUITETURA IOT PARA PEQUENOS PRODUTORES DE FRANGO DE CORTE DO
            PARANÁ: PROPOSTA MULTIPLATAFORMA PARA GESTÃO DE DADOS
          </h3>
        </div>
      </div>

      <div className="descri">
        <h3>
          Resumo:
          A conexão de dados entre máquinas e pessoas é um dos pilares da Indústria 4.0
           e da geração da Internet das Coisas (IoT- Internet of Things),
            favorecendo a produtividade na saúde, manufatura, logística e cidades inteligentes.
             No caso do agronegócio 4.0, as projeções indicam uma menor difusão dessas tecnologias
             , porque ainda existe a dificuldade na adesão massiva de produtores rurais a novas tecnologias,
              além da dependência de tecnologias estrangeiras; estas questões acabam gerando um cenário de seletividade social
               e tecnológica no qual por vezes, apenas grandes produtores rurais aderem às tecnologias da indústria 4.0.
                Paralelamente, outro aspecto encontrado na literatura é a ausência de identificação dos usuários com
                 aplicativos para IoT existentes, ou seja, os usuários do contexto rural encontram dificuldade na utilização
                  destas interfaces gráficas e acabam por abandoná-las. Neste contexto, esta tese propõe uma arquitetura
                   de gestão de dados baseado no paradigma da IoT que seja open source, baixo custo e multiplataforma
                    para pequenos produtores do setor de avicultura de corte que apresenta o mapeamento de necessidades 
                    e prioridades com os atores da cadeia produtiva e as lacunas tecnológicas encontradas em suas percepções.
                     No mapeamento foi possível delinear requisitos funcionais e não funcionais que a arquitetura IoT
                      deve contemplar: modelagem de requisitos das camadas física e computacional (back e front-end);
                       posterior avaliação da arquitetura com potenciais usuários, atentando a elementos de usabilidade 
                       e experiência de usuário (UX) para identificar elementos não abarcados nas etapas anteriores;
                        avaliação dos resultados para consolidar a qualidade dos requisitos da aplicação e a apresentação
                         da validação estatística da arquitetura em duas vertentes: 1 - perspectiva do usuário e
                          2 - eficiência em melhorar os dados de produção, comparando dados produtivos a priori e a posteriori
                           à implementação. Como resultado, foi possível verificar a indicação de que a arquitetura deve se
                            estruturar em camadas, com a inclusão de adaptividade entre as camadas dos elementos de UX,
                             sendo estas escaláveis e seguras na colaboração entre os usuários e seus indicadores produtivos.
                              Foi possível concluir que pequenos produtores que fizerem uso desta ferramenta poderão tomar
                              melhores decisões, identificar um baixo desempenho e agir de forma rápida, barata, 
                              simples e ergonômica para atender às exigências de competitividade internacional, 
                              quando em comparação com grandes produtores da mesma região.
         
          </h3>
          </div>
          
          <div className="descri1">
          A tese faz parte do projeto de pesquisa intitulado: "Internet das Coisas aplicada na Cadeia Produtiva do Agronegócio - Agricultura 4.0".                   
          </div>
     
  
      <div className="advisors">
        <div className="onde1">
        <h4>Desenvolvido por:</h4>
        <h4>Msc. Lucas José de Souza</h4>
        <h4>Discente de doutorado do PPGGI - UFPR </h4>
        <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFnFkIQfDfhUg/profile-displayphoto-shrink_200_200/0/1536666288122?e=1637193600&v=beta&t=bg-gnMbupOCUwI-6vTLWnY5BCu_h0stVzel4cfmLWg8"
        alt="photo"
        class="avatar"
        /> 
        </div>      
        <div className="onde1">
        <h4>Supervisão e orientação:</h4>
        <h4> Dr. Egon Walter Wildauer </h4>
        <h4>DECIGI - UFPR</h4>
        <img
        src="https://media-exp1.licdn.com/dms/image/C4D03AQEn4uY_cE5MYA/profile-displayphoto-shrink_800_800/0/1516495916535?e=1637193600&v=beta&t=bx4aXdKYS2wPWQxc5dPJENtrAS2MQQzgdaKg9-iWlw0"
        alt="photo"
        class="avatar" 
        />
        </div>
        <div className="onde1">
        <h4>Co-orientação:</h4>
        <h4>Dr. André Belini Mariano</h4>
        <h4>DELT - UFPR</h4>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5103AQGN7zHixzuKBg/profile-displayphoto-shrink_800_800/0/1517464765022?e=1637193600&v=beta&t=Xw-pvElX3ROOMNnGeejCY6xevh-iWbCo-Ak_blIfrdE"
          alt="photo"
          class="avatar"
        />
        </div>
        </div>       
      </div>

      </div> 
  );
}

export default About2;
