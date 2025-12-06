🇧🇷 README em Português
# GAME-JOKENPO

Uma implementação simples do clássico jogo Jokenpô (Pedra, Papel ou Tesoura), feita com HTML, CSS e JavaScript.  
Este projeto serve como um exercício de front-end e lógica de jogo, onde o jogador pode competir contra o computador diretamente no navegador.

## 📄 Visão Geral

GAME-JOKENPO permite que o usuário escolha entre Pedra, Papel ou Tesoura, enquanto o computador “escolhe” aleatoriamente sua jogada. Em seguida, o jogo compara as escolhas e determina o vencedor com base nas regras tradicionais. O resultado (vitória, derrota ou empate) é exibido imediatamente na interface.  

As regras seguem a versão clássica do jogo:  
- Pedra vence Tesoura (quebra a tesoura) :contentReference[oaicite:2]{index=2}  
- Tesoura vence Papel (corta o papel) :contentReference[oaicite:3]{index=3}  
- Papel vence Pedra (embrulha a pedra) :contentReference[oaicite:4]{index=4}  
- Caso ambos escolham o mesmo, há empate. :contentReference[oaicite:5]{index=5}

Tudo roda no navegador — não há dependências externas.

## 🛠 Tecnologias Utilizadas

- **HTML5** — estrutura da página e elementos interativos.  
- **CSS3** — estilos visuais e layout da interface.  
- **JavaScript** — lógica de aleatoriedade, comparação das jogadas e atualização da interface.

## 🚀 Como Executar / Testar

1. Clone o repositório:
   ```bash
   git clone https://github.com/SWtheaven/GAME-JOKENPO.git


2. Acesse a pasta:

cd GAME-JOKENPO

3. Abra o arquivo index.html em seu navegador de preferência.

Escolha Pedra, Papel ou Tesoura e veja o resultado da rodada.

📁 Estrutura do Projeto
GAME-JOKENPO/
<br>
├── index.html       # Página principal e UI
<br>
├── style.css        # Estilos e layout
<br>
├── scripts.js       # Lógica do jogo (aleatoriedade + regras)
<br>
└── assets/          # (opcional) recursos estáticos (imagens, ícones etc.)

✨ Possíveis Melhorias / Funcionalidades Futuras

-Marcar placar: manter contagem de vitórias/derrotas/empates entre jogador e computador.

-Permitir múltiplas rodadas consecutivas sem recarregar a página.
-
Animações ou feedback visual/sonoro quando o jogador vence ou perde.
Interface responsiva para dispositivos móveis.

Adicionar mais opções de jogo (ex: variantes expandidas de Jokenpô — mais gestos).

📄 Licença

Este projeto está licenciado sob a MIT License — sinta-se à vontade para usar, modificar e distribuir.
