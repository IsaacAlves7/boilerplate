# Angular Boilerplate

Base moderna em **Angular 22 + TypeScript (strict)**.

## O que vem incluso
- Standalone components (sem NgModules) e `ChangeDetectionStrategy.OnPush`
- **Zoneless** change detection e **signals**
- Control flow nativo (`@if`, `@for`, `@empty`)
- Rotas com **lazy loading**, `withComponentInputBinding` e View Transitions
- `HttpClient` com `withFetch()`, interceptors funcionais (URL base e erros) e `httpResource`
- Tema claro/escuro (`ThemeService`) com variáveis CSS
- Notificações (toasts) via signals
- Environments (`src/environments`) com troca automática no build de desenvolvimento
- Testes com **Vitest**, SCSS e Prettier

## Comandos
```bash
npm install
npm start        # http://localhost:4200
npm run build    # saída em dist/
npm test
```

## Estrutura
```
src/app/
  core/       # config, interceptors, serviços globais (singletons)
  layout/     # header e estrutura da página
  features/   # uma pasta por funcionalidade (home, about, ...)
  shared/     # componentes reutilizáveis
  app.config.ts   # providers globais
  app.routes.ts   # rotas
```

## Próximos passos sugeridos
- Ajustar `apiUrl` em `src/environments/*`
- Criar features: `ng generate component features/minha-feature/minha-feature`
- Adicionar SSR: `ng add @angular/ssr`
