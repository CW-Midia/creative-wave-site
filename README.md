# Creative Wave — Site institucional

Site estático (HTML/CSS/JS puro) da Creative Wave Mídia Digital.
Não precisa de servidor, banco de dados ou build — é só subir os arquivos.

## Estrutura

```
index.html       → Home
servicos.html     → Serviços (Sites, Tráfego, Branding)
sobre.html        → Sobre a agência
contato.html      → Contato (formulário integrado ao WhatsApp)
styles.css        → Estilos (todas as páginas)
script.js         → Menu mobile + formulário de contato
assets/           → Logos e favicon
```

## Como publicar no GitHub Pages (gratuito)

1. **Crie o repositório**
   - Acesse [github.com/new](https://github.com/new)
   - Nome sugerido: `creative-wave-site`
   - Deixe como **Public** (necessário para o plano gratuito do GitHub Pages)
   - Não marque "Add a README" (já temos um)

2. **Suba os arquivos**
   - Na página do repositório recém-criado, clique em **"uploading an existing file"**
   - Arraste todos os arquivos e a pasta `assets/` para a área de upload
   - Clique em **Commit changes**

   *(Alternativa via linha de comando, se preferir usar Git local):*
   ```bash
   cd caminho/para/site
   git init
   git add .
   git commit -m "Primeira versão do site"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/creative-wave-site.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages**
   - No repositório, vá em **Settings → Pages**
   - Em "Branch", selecione `main` e a pasta `/ (root)`
   - Clique em **Save**
   - Em alguns minutos, o site estará no ar em:
     `https://SEU-USUARIO.github.io/creative-wave-site/`

## Quando você tiver o domínio próprio (ex: creativewave.com.br)

1. No repositório, crie um arquivo chamado `CNAME` (sem extensão) na raiz, contendo apenas:
   ```
   www.creativewave.com.br
   ```
2. No painel do seu provedor de domínio (Registro.br, Hostinger, GoDaddy etc.), crie um registro **CNAME** apontando `www` para `SEU-USUARIO.github.io`
3. Para o domínio raiz (sem `www`), crie registros **A** apontando para os IPs do GitHub Pages:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Volte em Settings → Pages e adicione o domínio customizado no campo indicado, marque "Enforce HTTPS"

## Quando tiver o CNPJ

Me envie os dados que eu atualizo no site (e no guia de marca, se necessário):
- Razão social / CNPJ no rodapé (comum em sites institucionais, passa mais credibilidade)
- E-mail institucional (ex: contato@creativewave.com.br) nas páginas de Contato e rodapé
