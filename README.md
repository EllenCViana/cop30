# COP30 — Como executar o projeto

Este projeto usa Vite + React + TypeScript com Tailwind. Este README explica como instalar dependências e executar o projeto em um ambiente Windows (PowerShell).

## Pré-requisitos

- Node.js (recomenda-se Node 18+)
- npm (vem com o Node) — também é possível usar yarn ou pnpm se preferir
- Acesso à internet para baixar dependências

Observação: o projeto usa bibliotecas como Firebase, Supabase e Stripe; se você precisar integrar serviços externos, configure as variáveis de ambiente apropriadas (ex.: chaves de API) antes de rodar em produção.

## Scripts disponíveis (extraídos de `package.json`)

- `npm run dev` — inicia o servidor de desenvolvimento (Vite)
- `npm run build` — gera os arquivos para produção
- `npm run preview` — serve a versão de produção localmente (após `build`)

> Os scripts acima são os definidos no `package.json` do projeto. Se você usar `yarn`, substitua `npm run <script>` por `yarn <script>`. Para `pnpm`, use `pnpm <script>`.

## Instalação (uma vez)

Abra o PowerShell na pasta do projeto (`c:\Users\ellen\OneDrive\Documentos\COP30`) e execute:

```powershell
npm install
```


## Executar em modo desenvolvimento

No PowerShell, execute:

```powershell
npm run dev
```

Por padrão o Vite abre em http://localhost:5173 (ou apenas mostre a URL no terminal). Se quiser alterar a porta:

```powershell
npm run dev -- --port 3000
```

## Build para produção

Para gerar os artefatos de produção:

```powershell
npm run build
```

Isso criará uma pasta `dist/` com os arquivos prontos para publicar.

## Servir a build localmente

Após `npm run build`, você pode testar a build localmente com:

```powershell
npm run preview
```

O `vite preview` serve os arquivos gerados na `dist/` (por padrão na porta 5173 ou outra porta livre).

## Variáveis de ambiente e integração com serviços

O repositório utiliza bibliotecas como Firebase, Supabase e Stripe. Se o projeto precisar de chaves ou URLs para funcionar localmente, crie um arquivo `.env` (ou use outro método de configuração) e defina as variáveis necessárias.

Exemplo (não crie este arquivo com chaves reais no controle de versão):

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_public_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
```

No Vite, variáveis que começam com `VITE_` ficam disponíveis no código do cliente via `import.meta.env`.

## Dicas rápidas

- Se houver problemas de versão do Node, atualize para uma versão LTS recente (18+).
- Para limpar dependências e reinstalar:

```powershell
rm -r node_modules; npm install
```

(No PowerShell, `rm -r` funciona; se preferir, use o Explorer para remover `node_modules`.)

- Para depurar problemas, verifique o terminal do Vite ao executar `npm run dev` — mensagens e erros aparecem ali.

## Contribuição

Se for colaborar neste repositório, siga estas etapas básicas:

1. Fork/clone o repositório
2. Instale dependências (`npm install`)
3. Crie uma branch de feature
4. Faça commits pequenos e descritivos
5. Abra um pull request

## Contato

Se precisar de ajuda para configurar chaves externas (Supabase/Firebase/Stripe) ou tiver dúvidas específicas sobre execução, descreva o erro/saída do terminal e eu ajudo a diagnosticar.

---

Arquivo gerado automaticamente: instruções básicas para instalar e rodar o projeto localmente em PowerShell (Windows). Ajuste variáveis de ambiente conforme necessário para integrações externas.