import React from 'react'
import './globalindicators.css'

import Header from '../../components/Header'
import Title from '../../components/Title'

import {FaRProject} from 'react-icons/fa'
import {FiArrowLeft} from 'react-icons/fi'
import {Link} from 'react-router-dom'


export default function GlobalIndicators(){
    return(
        
        <div>

        <Header />

        <div className="content">
        <Title name="Indicadores Nacionais do Agronegócio">  
            <Link to="/dashboard">
                <FiArrowLeft size={45} />
            </Link>      
        
            
        
        </Title> 

        <div className="container">
      <div className="tituloIN">
        <h1>Indicadores Nacionais do Agronegócio <FaRProject size={45} color={'blue'} /></h1>
        
      </div>
      <div className="projetovinculado">
        <h2>
        
          Software desenvolvido por Msc. Jhonny Ivair de Lima Maciel na pesquisa intitulada:
        </h2>
                
        <div className="tituloProjeto">
          <h3>
          "INDICADORES PARA O AGRONEGÓCIO UTILIZANDO FERRAMENTA WEB DE VISUALIZAÇÃO DA INFORMAÇÃO"
          </h3>
        </div>
      </div>
        <div className="descri">
        <h3>
          Resumo:
          A cadeia produtiva do agronegócio no Brasil é responsável
           por entre 20 a 30% do Produto Interno Bruto desde a década de 90,
            e envolve desde a produção de insumos e maquinários para utilização na agricultura
             e pecuária até o consumidor final. A competitividade no setor faz com que a utilização
              da informação para suporte a decisão seja fator de vantagem entre os atores envolvidos
               com o agronegócio, podendo, ao mesmo tempo, servir também na tomada de decisão do poder público.
                Alguns órgãos brasileiros ligados ao agronegócio disponibilizam, com intuito de apoio a decisão,
                 ferramentas de visualização de informação de seus dados. Estas ferramentas porém, deixam algumas lacunas,
                  que ao serem exploradas possibilitam maior auxílio à usuários da informação em futuras decisões.
                   Portais como a CONAB, EMBRAPA, IBGE e FAO disponibilizam dados brutos de produção agrícola,
                    que se agregados em um único conjunto de dados torna-se uma robusta fonte de informação,
                     decorrente da variedade de dados acerca de diferentes produtos em épocas distintas. 
                     A fonte de informações aliada ao uso de técnicas de visualização da informação disponibiliza
                      ao usuário a possibilidade de filtragem e melhor compreensão dos dados, sempre com intuito de
                       proporcionar maior suporte a decisão nos âmbitos público e privado. Além da questão da tomada
                        de decisão nos setores público e privado, ferramentas que se utilizam de visualização da informação
                         podem apontar fenômenos presentes em seus conjuntos de dados, que posteriormente pode ser estudados
                          e explicados. É objetivo deste trabalho demonstrar o desenvolvimento de uma ferramenta web
                           que disponibilize indicadores de produção do agronegócio, realizando funcionalidades complementares
                            as disponibilizadas por ferramentas governamentais, como a utilização de dados de diferentes fontes,
                             possibilidade de cruzamento de dados de diferentes produtos relacionados a pecuária
                              e a agricultura do Brasil, utilizando também métodos estatísticos para descrição dos dados.
         
          </h3>
          </div>



        <div className="research">
             

        <button className='jones' onClick={e => {
        e.preventDefault();
        window.location.href = 'https://dadosagrocgti.shinyapps.io/indicadoresAgro/';
        }}> INDICADORES NACIONAIS
        </button> 

        <button className='jones' onClick={e => {
        e.preventDefault();
        window.location.href = 'https://acervodigital.ufpr.br/bitstream/handle/1884/62284/R%20-%20D%20-%20JHONNY%20IVAIR%20DE%20LIMA%20MACIEL.pdf?sequence=1&isAllowed=y';
        }}> ACESSAR A DISSERTAÇÃO
        </button> 

       
        </div>

        </div>
        </div>
        </div>
        
    )
}