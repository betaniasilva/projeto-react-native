# CineFila 🎞

## Estrutura do Projeto

```
app/
   _layout.tsx            # Declaração das rotas no Expo Router
   index.tsx              # Tela de boas-vindas (landing)
   (auth)/
      login.tsx            # Fluxo de autenticação de usuários
      register.tsx         # Cadastro local com validação
   movie/
      index.tsx            # Hub principal após login

assets/
   fonts/                 # Fontes personalizadas utilizadas no tema
   images/                # Ícones e ilustrações estáticas

components/
   CineFilaLogo.tsx       # Logotipo SVG do app
   Filmstrip.tsx          # Ilustração decorativa
   FilmReel.tsx           # Elemento visual extra
   MovieActionButton.tsx  # Botão base reutilizável
   SearchMovieButton.tsx  # Botão "Buscar Filme"
   MovieQueueButton.tsx   # Botão "Fila de Filmes"
   FavoriteMoviesButton.tsx
   DislikedMoviesButton.tsx
   LogoutButton.tsx

constants/
   Theme.ts               # Paleta de cores, tipografia, espaçamentos

hooks/
   useCineFilaFonts.ts    # Carregamento das fontes do Google Fonts

utils/
   auth.ts                # Helpers para estado de autenticação no AsyncStorage
```

## 📌 Navegação entre Telas

- A navegação é controlada pelo **Expo Router** utilizando _file-based routing_.
- `app/_layout.tsx` registra as pilhas `(auth)` (login/registro), a tela inicial (`index.tsx`) e o hub pós-login (`movie/index.tsx`).
- O componente `router` é importado de `expo-router` para realizar redirecionamentos programáticos:
  - `router.push("/(auth)/login")` e `router.push("/(auth)/register")` partindo da landing page.
  - `router.replace("/movie")` após autenticação bem-sucedida, garantindo que o usuário veja o hub sem possibilidade de voltar para a tela de login com o botão físico.
- O `useFocusEffect` em `app/movie/index.tsx` garante que os dados do usuário corrente sejam recarregados sempre que a tela ganhar foco.

## Componentes Básicos e Estilização

- Há um **design system leve** em `constants/Theme.ts` com cores cinematográficas, tipografia e espaçamentos padronizados.
- Componentes visuais compartilhados (
  `CineFilaLogo`, `Filmstrip`, `MovieActionButton` e variações) ficam em `components/` para reutilização em diferentes telas.
- Os botões especializados (`SearchMovieButton`, `MovieQueueButton`, `FavoriteMoviesButton`, `DislikedMoviesButton` e `LogoutButton`) estendem `MovieActionButton`, garantindo consistência visual e acessibilidade (labels e `accessibilityRole`).
- Os formulários de login e registro são construídos com `react-hook-form` + Zod, exibindo mensagens de erro com o esquema tipado.

## 📌 Responsividade

- Telas principais utilizam `ScrollView` com `contentContainerStyle` para garantir deslocamento em dispositivos menores.
- Estilos baseiam-se no sistema de espaçamento (`Spacing`), tipografia (`Typography`) e cores (`Colors`) para manter proporções consistentes.
- Uso de `StatusBar`, alinhamentos `flex` e `TouchableOpacity` com `activeOpacity` melhoram a experiência em diferentes tamanhos de tela.
- Inputs e botões adotam `accessibilityLabel` e `returnKeyType` para facilitar o uso com teclado virtual e leitores de tela.

## 📌 Autenticação

- Cadastro (`app/(auth)/register.tsx`):
  - Validação com Zod (nome, e-mail, senha e confirmação).
  - Gera `passwordHash` com `expo-crypto` (SHA-256) antes de salvar.
  - Persiste usuários no `AsyncStorage` (chave `users`).
- Login (`app/(auth)/login.tsx`):
  - Valida credenciais, recalcula o hash da senha e compara com os dados salvos.
  - Salva o usuário autenticado em `AsyncStorage` (`currentUser`) para consultas posteriores.
  - Redireciona à tela `movie/index.tsx` após sucesso e exibe `Alert` de boas-vindas.
- Utilitários em `utils/auth.ts`: recuperação do usuário atual, verificação de sessão ativa e `logout` (remoção da chave `currentUser`).

Essas seções documentam o estado atual do CineFila e servem como guia rápido para continuidade do desenvolvimento.

## Get started no projeto

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

# Equipe do Projeto

<a href="https://github.com/betaniasilva"><img src="https://github.com/betaniasilva.png" width="80" height="80"></a> &nbsp;
<a href="https://github.com/JoaoAANgr"><img src="https://avatars.githubusercontent.com/u/140200421?v=4" width="80" height="80"></a> &nbsp;
