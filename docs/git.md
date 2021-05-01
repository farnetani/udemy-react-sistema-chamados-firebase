# Comandos

Fonte: https://brorlandi.github.io/git-desfazendo-commits

## Desfazer o último commit

- Modo Soft (não perde as alterações, apenas desfaz oc ommit)

```
git reset HEAD~1
```

- Modo Hard (perde as alterações e volta o estado)
```
git reset --hard HEAD~1
```
