# Cent Browser — limpeza automática de preenchimento de formulários
## Objetivo
Esta extensão remove os dados de preenchimento automático de formulários do perfil do Cent Browser sempre que o navegador é iniciado.
Observação: Também funciona no navegador Google Chrome.

*não solicita a remoção de cookies, senhas salvas, cache, histórico ou outros tipos de dados.

1. Feche completamente o Cent Browser.
2. Extraia a pasta `Script-limpeza-seletiva-main` para um local fixo no computador. Recomendação: `C:\CentBrowser\Script-limpeza-seletiva-main`.
3. Não mova, renomeie ou apague essa pasta depois de carregar a extensão. O Cent Browser precisa continuar acessando os arquivos nesse local.
4. Abra o Cent Browser e acesse `chrome://extensions`.
5. Ative o **Modo do desenvolvedor**.
6. Clique em **Carregar sem compactação** e selecione a pasta `C:\CentBrowser\Script-limpeza-seletiva-main` (ou o local fixo escolhido no passo 2).
7. Confirme que a extensão aparece na lista e está ativada.
8. Feche todas as janelas do Cent Browser e abra o navegador novamente.
9. Verifique se os dados de preenchimento automático foram removidos. Confirme também que cookies, sessões, senhas salvas e cache continuam disponíveis.

Repita os passos em cada computador. Essa instalação precisa ser feita em cada máquina e depende de o Cent Browser continuar aceitando extensões carregadas sem compactação.

## Cuidados importantes
- Faça primeiro o teste em uma máquina e, de preferência, com um perfil de teste ou após confirmar que há um backup adequado.
- A extensão remove os dados de formulário salvos no perfil utilizado pelo navegador.
- A extensão executa no evento de inicialização do navegador; não é um agendador contínuo e não limpa os dados enquanto o navegador permanece aberto.
- Como a extensão é carregada sem compactação, o Cent Browser pode exibir avisos ou exigir que o modo de desenvolvedor permaneça habilitado.
- A compatibilidade depende da versão instalada do Cent Browser/Chromium.

## Diagnóstico
- Se a extensão não aparecer ou estiver desativada, abra `chrome://extensions` e verifique mensagens de erro.
- Se a limpeza não ocorrer, feche completamente o navegador e abra-o novamente. Verifique o console/erros da extensão, se disponível.
- Se aparecer um erro informando que `removeFormData` não existe, não apague o arquivo `Web Data` manualmente. Esse banco pode conter outros dados do perfil.

## Remoção da extensão
1. Acesse `chrome://extensions`.
2. Clique em **Remover** na extensão de limpeza.
3. Se não for mais necessária, feche o navegador e apague a pasta `Script-limpeza-seletiva-main` que foi copiada para o computador.

## Limitação
Esta é uma extensão de teste para instalação manual. Não é instalada automaticamente em outras máquinas.
