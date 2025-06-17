# DORA Metrics Landing Page

Uma landing page moderna e responsiva desenvolvida em Next.js (React) baseada no design fornecido.

## 🚀 Tecnologias Utilizadas

- **Next.js** - Framework React para desenvolvimento web
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Lucide React** - Biblioteca de ícones moderna
- **Vite** - Build tool rápido para desenvolvimento

## 📋 Funcionalidades

- ✅ Design responsivo para desktop e mobile
- ✅ Animações suaves e efeitos hover
- ✅ FAQ interativo com perguntas expansíveis
- ✅ Paleta de cores roxa/violeta moderna
- ✅ Seções bem estruturadas seguindo o design original
- ✅ Componentes reutilizáveis e código limpo

## 🎨 Seções da Página

1. **Header** - Logo Elven, navegação e CTA
2. **Hero Section** - Título principal com ilustração animada
3. **DORA Metrics** - Explicação das 4 métricas principais
4. **Benefícios** - 6 cards com vantagens da plataforma
5. **Resultados** - Lista de benefícios com gráfico visual
6. **FAQ** - Perguntas frequentes interativas
7. **CTA Final** - Call-to-action com gradiente
8. **Footer** - Informações da empresa e redes sociais

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- pnpm, npm ou yarn

### Instalação e Execução

1. **Instalar dependências:**
   ```bash
   pnpm install
   # ou
   npm install
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

3. **Acessar no navegador:**
   ```
   http://localhost:5173
   ```

### Build para Produção

```bash
# Gerar build otimizado
pnpm run build

# Visualizar build localmente
pnpm run preview
```

## 📁 Estrutura do Projeto

```
dora-metrics-landing/
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/            # Imagens e recursos
│   ├── components/        # Componentes React
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos customizados
│   └── main.jsx          # Ponto de entrada
├── index.html            # Template HTML
├── package.json          # Dependências e scripts
└── vite.config.js        # Configuração do Vite
```

## 🎯 Características do Design

- **Paleta de Cores:** Tons de roxo/violeta (#6366f1, #8b5cf6, #a855f7)
- **Tipografia:** Sans-serif moderna com hierarquia clara
- **Layout:** Grid responsivo com espaçamento consistente
- **Animações:** Efeitos hover e transições suaves
- **Acessibilidade:** Contraste adequado e navegação por teclado

## 📱 Responsividade

A landing page foi desenvolvida com abordagem mobile-first e é totalmente responsiva:

- **Desktop:** Layout em grid com múltiplas colunas
- **Tablet:** Adaptação do grid para telas médias
- **Mobile:** Layout em coluna única com navegação otimizada

## 🔧 Customização

Para personalizar a landing page:

1. **Cores:** Edite as variáveis CSS em `src/App.css`
2. **Conteúdo:** Modifique os textos diretamente em `src/App.jsx`
3. **Componentes:** Adicione novos componentes na pasta `src/components/`
4. **Estilos:** Use classes Tailwind ou CSS customizado

## 📞 Suporte

Para dúvidas ou suporte técnico, consulte a documentação oficial:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)

---

Desenvolvido com ❤️ usando Next.js e Tailwind CSS

