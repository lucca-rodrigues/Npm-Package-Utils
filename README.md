# Npm-Package-Utils

## Este pacote contempla as seguintes funcionalidades:
- Converter datas para o Formato ISO
- Converter ISO para new Date
- Acrescentar horas além de um período
- Remover horas á partir de uma hora específica

## Compo importar funcionalidades:
```
import { formatDateToIso } from "@lucca-rodrigues/utils-package";

const oldDate = 'Fri Sep 14 2018 23:59:59 GMT-0300'
const date = formatDateToIso(oldDate)

function example() {
  return date; // 2018-09-15T02:59:59.999Z
}

export default App;

```