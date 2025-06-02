import React from 'react';
import AlertMessage from '../components/layout/AlertMessage';

const ResgateGatinhoPage = () => {
  return (
    <main className="content-container">
      <AlertMessage />
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>A Incrível Jornada de Fagulha: Do Abandono ao Amor</h1>
      
      <div className="rescue-image-container" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img 
          src={require('../assets/images/placeholder_gatinho_resgatado.jpg')} 
          alt="Gatinho resgatado Fagulha" 
          className="rescue-image"
          style={{
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '400px',
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <div className="rescue-text container" style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '20px', fontSize: '1.8em' }}>Um Miado Tímido na Noite Fria</h2>
        <p style={{ textAlign: 'justify', marginBottom: '15px', color: '#555', lineHeight: '1.7', fontSize: '1.1em' }}>
          Em uma viela escura e esquecida pela cidade, um som quase imperceptível cortava o silêncio gélido da madrugada. Era Fagulha, um pequeno gatinho de pelagem cinza e olhos assustados, encolhido sob uma caixa de papelão rasgada. O abandono havia deixado marcas profundas em seu corpinho frágil, mas em seus olhos ainda brilhava uma pequena chama de esperança, daí o nome Fagulha.
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '15px', color: '#555', lineHeight: '1.7', fontSize: '1.1em' }}>
          O resgate foi delicado. Cada movimento brusco o fazia tremer ainda mais. Com palavras suaves e um pouco de alimento oferecido com paciência, a barreira da desconfiança começou a ceder. Ao ser gentilmente envolvido em um cobertor macio, Fagulha relaxou pela primeira vez em dias, sentindo um calor que ia além do físico. Era o calor da compaixão.
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '15px', color: '#555', lineHeight: '1.7', fontSize: '1.1em' }}>
          Levado a um lar temporário seguro, Fagulha iniciou sua jornada de recuperação. Os primeiros dias foram de adaptação, mas logo a curiosidade natural dos felinos começou a aflorar. As brincadeiras com um simples novelo de lã se tornaram seu passatempo favorito, e os ronronares tímidos evoluíram para uma sinfonia de gratidão a cada carinho recebido. A transformação de Fagulha, de um gatinho assustado para um companheiro confiante e afetuoso, é um lembrete do poder do amor e da segunda chance que todos os animais merecem.
        </p>
        <p style={{ textAlign: 'justify', marginBottom: '15px', color: '#555', lineHeight: '1.7', fontSize: '1.1em' }}>
          Hoje, Fagulha ilumina um lar definitivo com sua alegria contagiante. Sua história é um testemunho de que, mesmo nas situações mais sombrias, um ato de bondade pode reacender a chama da vida. Ao apoiar a causa animal, seja adotando, oferecendo lar temporário, doando ou conscientizando, você se torna um agente de transformação, ajudando a escrever finais felizes como o de Fagulha.
        </p>
      </div>
    </main>
  );
};

export default ResgateGatinhoPage;
