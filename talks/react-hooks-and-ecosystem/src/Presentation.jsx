import React, { use } from 'react'
import { theme, colors } from './style-guide'

/* spectacle components */
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image,
  Layout,
  Fill,
  Fit,
  Code
} from 'spectacle'

/* gifs */
const narutoBg = require('./assets/gifs/naruto.gif')
const thanksBg = require('./assets/gifs/gai-sensei.gif')
const excitedBg = require('./assets/gifs/excited.gif')
const thinkingBg = require('./assets/gifs/thinking.gif')
const yoda = require('./assets/gifs/yoda.gif')
const gandalf = require('./assets/gifs/gandalf.gif')
const universe = require('./assets/gifs/universe.gif')

/* images */
const useReducer = require('./assets/useReducer.png')
const reduxHooks = require('./assets/redux-hooks.jpeg')
const oneToOne = require('./assets/one-to-one.png')

const defaultTransition = ['slide', 'fade']

const Presentation = () => (
  <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} progress='none'>
    <Slide transition={['zoom']} bgColor={colors.white}>
      <Heading size={1} fit caps lineHeight={1} textColor={colors.black}>
        Entendendo React Hooks
      </Heading>
      <Heading size={2} fit caps lineHeight={1} textColor={colors.black}>
        e seu impacto no ecossistema
      </Heading>
      <Text padding='24' textColor={colors.blue}>
        por Baldi
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.indigo}>
      <Text textColor={colors.white} padding='20' textSize='2em'>
        e hoje vamos refletir sobre uma nova forma de utilizar o React 😮
      </Text>
      <Appear>
        <Text textColor={colors.white} padding='20' textSize='1.5em'>
          <i>e o impacto dessa mudança no nosso querido ecossistema</i>
        </Text>
      </Appear>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgColor={colors.blue}
      bgImage={narutoBg}
      bgDarken={0.82}
    >
      <Text textColor={colors.white} padding='28' textSize='1.5em'>
        Quem vos fala né
      </Text>
      <Appear>
        <Text textColor={colors.grey} padding='12' textSize='3em'>
          Desenvolvedor frontend
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.grey} padding='12' textSize='3em' bold>
          JavaScript {'<3'}
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.grey} padding='12' textSize='1.5em'>
          também curto umas breja e um lo-fi
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.grey} padding='22' textSize='1.5em'>
          <i>remote at @Divisio</i>
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.grey} padding='22' textSize='1.5em'>
          <i>@baldilp</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition}>
      <Text textColor={colors.black} textSize='1.5em' margin='30px'>
        antes de começar... alguns princípios básicos
      </Text>
      <Appear>
        <Text textColor={colors.black} textSize='2em' margin='30px'>
          qual a forma primária de pensar nos nossos componentes?
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.indigo}>
      <Text textSize='3em' textColor={colors.white}>
        stateful components
      </Text>
      <Text textColor={colors.orange} textSize='2em' margin='30px'>
        x
      </Text>
      <Text textSize='3em' textColor={colors.white}>
        stateless components
      </Text>
      <Appear>
        <div>
          <Text textColor={colors.pink} textSize='2em' margin='30px'>
            ~
          </Text>
          <Code textSize='3em' textColor={colors.white}>
            functional
          </Code>
        </div>
      </Appear>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgImage={excitedBg}
    />
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.orange} textSize='2em' margin='30px'>
        stateful functional component (?)
      </Text>
      <Appear>
        <Text textColor={colors.grey} textSize='1.5em' margin='60px'>
          <i>+ javascript - segredos</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.black}>
      <Text textColor={colors.orange} textSize='2em'>
        super poderes para functional components 🚀
      </Text>
      <Text textColor={colors.pearl} textSize='1.5em' margin='40px'>
        é basicamente isso
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.green}>
      <Text textColor={colors.pearl} textSize='1.5em'>
        motivos
      </Text>
      <Appear>
        <Text textSize='2em' margin='40px 0 0 0' textColor={colors.white}>
          uma alternativa para os class components
        </Text>
      </Appear>
      <Appear>
        <div>
          <Text textSize='2em' margin='40px 0 0 0' textColor={colors.white}>
            simplificar a lógica de componentes complexos
          </Text>
          <Text textSize='1.5em' textColor={colors.grey} margin='12px 0 0 0'>
            é um novo modelo mental
          </Text>
        </div>
      </Appear>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgColor={colors.pink}
    >
      <Text margin='40px' textColor={colors.white} fit>
        sim, é uma feature deveras <strong><i>audaciosa</i></strong>
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text textSize='1.8em' margin='40px 0 0 0' textColor={colors.white}>
        simplifica padrões complexos como HOC’s e render props
      </Text>
      <Text textSize='1.5em' textColor={colors.pearl} margin='12px 0 0 0'>
        <i>hooks não criam “falsas hierarquias” na árvore</i>
      </Text>
      <Appear>
        <Text textSize='1.8em' margin='40px 0 0 0' textColor={colors.white}>
          cross-platform (renderer agnostic) 😮
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.grey}>
      <Text textColor={colors.indigo} textSize='1.5em' margin='30px'>
        pontos de atenção
      </Text>
      <Appear>
        <Text textSize='2em' margin='40px 0 0 0' textColor={colors.pink}>
          sintaxe estranha no início
        </Text>
      </Appear>
      <Appear>
        <Text textSize='1.5em' textColor={colors.pink} margin='18px 0 0 0'>
          <i>acostumem-se com o prefixo <strong>use</strong></i>
        </Text>
      </Appear>
      <Appear>
        <Text textSize='2em' margin='40px 0 0 0' textColor={colors.pink}>
          edge cases
        </Text>
      </Appear>
      <Appear>
        <Text textSize='1.5em' textColor={colors.pink} margin='18px 0 0 0'>
          <i>getSnapshotBeforeUpdate </i> e <i>componentDidCatch</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text margin='30px' textSize='1.5em' textColor={colors.orange}>
        como hooks lidam com ciclo de vida?
      </Text>
      <Appear>
        <Code margin='30px' textSize='2em' textColor={colors.orange} bold>
          useEffect
        </Code>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.orange}>
      <Text margin='30px' textSize='1.5em' textColor={colors.darkBlue}>
        e ele merece merece muita atenção
      </Text>
      <Appear>
        <Text textSize='2em' textColor={colors.darkBlue}>
          simplifica os métodos de ciclo de vida
        </Text>
      </Appear>
      <Appear>
        <Text textColor={colors.darkBlue} margin="32px" fit>
          um único hook, mais simplicidade
        </Text>
      </Appear>
      <Appear>
        <Text textSize="1.5em" textColor={colors.darkBlue} margin="12px 0 0 0">
          efeitos baseados nos meus inputs
        </Text>
      </Appear>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgDarken={0.7}
      bgImage={yoda}
    >
      <Text margin='30px' textSize='2em' textColor={colors.pearl}>
        é muito importante mudar o "modelo mental" por trás disso tudo
      </Text>
      <Text margin='30px' textSize='1.5em' textColor={colors.pearl}>
        é normal fazer comparativos com métodos de ciclo de vida, mas isso pode ser prejudicial
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.pearl}>
      <Image src={oneToOne} style={{ objectFit: 'contain', maxHeight: '80vh' }} />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.indigo}>
      <Text margin='30px' textSize='2em' textColor={colors.pearl}>
        vários{' '}
        <Code textColor={colors.pearl}>useEffect's</Code>
        {' '}no mesmo component 😮
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.pearl}>
      <Text margin='30px' textSize='2em' textColor={colors.darkBlue}>
        mas e a performance?
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.green}>
      <Text textColor={colors.white} textSize='2em' margin='30px'>
        memoization
      </Text>
      <Appear>
        <Text textSize='1.5em' textColor={colors.pearl} margin='30px'>
          total controle através do <strong>array de dependências</strong>
        </Text>
      </Appear>
      <Appear>
        <Text textSize='1.5em' margin='30px' textColor={colors.pearl}>
          <i>useCallback, useMemo</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <BlockQuote>
        <Quote textSize='2em'>
          Performance optimizations ALWAYS come with a cost but do NOT always come with a benefit
        </Quote>
        <Cite>Kent C. Dodds</Cite>
      </BlockQuote>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textSize='1.5em' textColor={colors.pearl} margin='30px'>
        o browser é rápido, calma
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.indigo}>
      <Text textColor={colors.pearl} fit>
        um dos pontos mais importantes sobre hooks:
      </Text>
      <Text textSize='2em' textColor={colors.pearl} margin='40px'>
        podemos criar nossos próprios hooks 😎
      </Text>
      <Text textColor={colors.pearl} textSize='2em'>
        <strong>são os <i>'custom hooks'</i></strong>
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.pink}>
      <Text textSize='2em' margin='40px' textColor={colors.pearl}>
        <strong>COMPOSIÇÃO</strong>
      </Text>
      <Appear>
        <Text textSize='1.5em' textColor={colors.pearl} margin='40px'>
          <i>mais flexibilidade</i>
        </Text>
      </Appear>
      <Appear>
        <Text textSize='1.8em' margin='40px' textColor={colors.white}>
          ciclos de vida modularizados
        </Text>
      </Appear>
      <Appear>
        <Text textSize='1.8em' margin='40px' textColor={colors.white}>
          + liberdade
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textColor={colors.pink} textSize='2em'>
        beleza então bora sapecar um hook na parada 🦑
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text margin='30px' textSize='3em' textColor={colors.white}>
        useContext
      </Text>
      <Text margin='30px' textSize='2em' textColor={colors.white}>
        mais uma forma de usar a Context API
      </Text>
      <Text margin='30px' textSize='1.5em' textColor={colors.white}>
        <i>(sem render props)</i>
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text margin='30px' textSize='3em' textColor={colors.white}>
        useReducer!!
      </Text>
      <Text margin='30px' textSize='2em' textColor={colors.white}>
        <i>a coisa ta ficando louca</i>
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.black}>
      <Image src={useReducer} style={{ objectFit: 'contain', maxHeight: '80vh' }} />
    </Slide>
    <Slide
      transition={defaultTransition}
      bgImage={thinkingBg}
    />
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text textSize='2em' textColor={colors.white}>
        beleza mas... e as libs de manipulação de estado? 👀
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.black}>
      <Image src={reduxHooks} style={{ objectFit: 'contain', maxHeight: '80vh' }} />
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.darkBlue}>
      <Text textSize='2em' textColor={colors.orange}>
        a ultima versão do{' '}
        <Code textColor={colors.orange} textSize='1em'>react-redux</Code>
        {' '}disponibiliza hooks
      </Text>
      <Appear>
        <Text textSize='1.5em' textColor={colors.pearl} margin='40px'>
          temos o{' '}
          <Code textSize='1em' textColor={colors.pearl}>useSelector</Code>
          {' '}e{' '}
          <Code textSize='1em' textColor={colors.pearl}>useDispatch</Code>
        </Text>
      </Appear>
      <Appear>
        <Text textSize='1.5em' textColor={colors.pearl}>
          mais simplicidade
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.green}>
      <Text textColor={colors.white} textSize='1.5em'>
        importante ressaltar que cada caso é um caso, simples assim :)
      </Text>
      <Appear>
        <Text textSize='2em' textColor={colors.pearl} margin='30px 0 0 0'>
          ninguém é obrigado a sair migrando tudo para hooks
        </Text>
      </Appear>
      <Appear>
        <Text textSize='1.5em' textColor={colors.pearl} margin='30px 0 0 0'>
          <i>aí o facebook vai lá e...</i>
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.pink}>
      <Text textSize='2em' textColor={colors.white}>
        hooks são totalmente opcionais
      </Text>
      <Text textSize='1.5em' textColor={colors.grey} margin='40px'>
        <i>no breaking changes</i>
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.blue}>
      <Text textSize='2em' textColor={colors.white}>
        <strong>
          a comunidade simplesmente vem{' '}
          <span style={{ color: colors.pink, backgroundColor: '#7cd3ff' }}>amando</span>
          {' '}Hooks
        </strong>
      </Text>
      <Appear>
        <Text textSize='1.5em' margin='40px' textColor={colors.white}>
          usem e tirem suas próprias conclusões!
        </Text>
      </Appear>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.indigo}>
      <Text textSize='1.5em' margin='40px' textColor={colors.pearl}>
        entendam que isso está além de uma sintaxe legal
      </Text>
    </Slide>
    <Slide transition={defaultTransition} bgColor={colors.indigo} bgDarken={0.7} bgImage={universe}>
    {/* <Slide transition={defaultTransition} bgColor={colors.indigo}> */}
      <Text textSize='2em' textColor={colors.pearl} margin='50px' style={{ lineHeight: '1.4em' }}>
        estamos vivendo um período de grande transformação e evolução no React :)
      </Text>
      <Appear>
        <Text textSize='1.5em' textColor={colors.orange}>
          isso é muito incrível
        </Text>
      </Appear>
    </Slide>
    <Slide
      transition={defaultTransition}
      bgColor={colors.white}
      bgImage={thanksBg}
      align='flex-end flex-end'
      padding='60px'
    >
      <Code textColor={colors.white} textSize='3em' bold>
        MUITO OBRIGADO 🤙
      </Code>
    </Slide>
  </Deck>
)

export default Presentation
