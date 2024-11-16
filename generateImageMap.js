const fs = require('fs');
const path = require('path');

// Caminho para a pasta de imagens
const candidatosPath = path.join(__dirname, 'assets/img/candidatos');

// Obter todos os arquivos da pasta
const files = fs.readdirSync(candidatosPath);

// Criar o mapeamento
const imageMap = files.reduce((map, file) => {
    const match = file.match(/FSE(\d+)_div\.jpg/);
    if (match) {
        const id = parseInt(match[1], 10);
        map[id] = `../../../assets/img/candidatos/${file}`;
    }
    return map;
}, {});

// Gerar o arquivo final com `require` embutido
const imageMapContent = `export default {
${Object.entries(imageMap)
        .map(([key, value]) => `  ${key}: require('${value}')`)
        .join(',\n')}
};`;

fs.writeFileSync('./imageMap.js', imageMapContent);

console.log('Mapa de imagens gerado com sucesso!');
