This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Variants and custom styling
It's a concept of component design pattern very similar with BEM methodologies. In ShadCN-UI (which uses Tailwind CSS + Radix UI), a variant refers to a design pattern for styling components with different visual behaviors using class utilities. This is done using utilities like:

- class-variance-authority (aka `cva`)

- tailwind-variants (alternative)

Edit on: `.components/ui/button.tsx`

## CN
Inside: `./lib/utils.ts`

No contexto do **ShadCN UI**, o **"CN"** no nome **`cn()`** (função utilitária comum nos exemplos) é uma abreviação de **`className`**.

Essa função normalmente serve para **concatenar classes do TailwindCSS de forma condicional**, semelhante ao que bibliotecas como `clsx` ou `classnames` fazem. O ShadCN UI, por padrão, inclui uma implementação dessa função chamada `cn()` no seu template base para facilitar o uso de Tailwind com componentes reativos e dinâmicos.

Um exemplo comum da função `cn()`:

```ts
import { cn } from "@/lib/utils"

function Button({ isActive }: { isActive: boolean }) {
  return (
    <button className={cn("px-4 py-2 rounded", isActive && "bg-blue-500")}>
      Clique
    </button>
  )
}
```

Nesse caso:

* Se `isActive` for `true`, o botão recebe a classe `"bg-blue-500"`;
* Se `false`, essa classe não é aplicada.

### TL;DR:

* **`cn`** = abreviação de **`className`**
* Usado para **combinar e condicionar classes** no TailwindCSS
* Muito comum em projetos com ShadCN UI para manter o código mais limpo e legível.

A semelhança entre o uso da função `cn()` (ou `className` condicional) no React com ShadCN/Tailwind e o que o Vue.js faz com binding de classes vem da reatividade declarativa, que permite alterar dinamicamente os estilos com base em estados.

Diferente do React, que depende de bibliotecas externas como `clsx`, `classnames`, `tailwind-variants` ou `shadcn/ui` para gerar classNames condicionais de forma organizada, o Vue.js já tem isso embutido nativamente no framework.