const filosofos = {
    "Aristóteles": ["O prazer no trabalho aperfeiçoa a obra.", "Você nunca fará nada neste mundo sem coragem. É a melhor qualidade da mente ao lado da honra.", "Nunca existiu uma grande inteligência sem uma veia de loucura.", "O ignorante afirma, o sábio duvida, o sensato reflete.", "Ter muitos amigos é não ter nenhum.", "É fazendo que se aprende a fazer aquilo que se deve aprender a fazer.", "A educação tem raízes amargas, mas os seus frutos são doces.", "O sábio nunca diz tudo o que pensa, mas sempre pensa tudo o que diz.", "Nós somos aquilo que fazemos repetidamente. Excelência então não é um modo de agir, mas um hábito.", "Valor final da vida depende mais da consciência e do poder de contemplação, que da mera sobrevivência.", " Nosso caráter é o resultado da nossa conduta.", "As pessoas dividem-se entre aquelas que poupam como se vivessem para sempre e aquelas que gastam como se fossem morrer amanhã."],
    "Sócrates": ["Só sei que nada sei.", "A vida não examinada não vale a pena ser vivida.", "Para conseguir a amizade de uma pessoa digna é preciso desenvolvermos em nós mesmos as qualidades que naquela admiramos.", "Sábio é aquele que conhece os limites da própria ignorância.", "Deve-se temer mais o amor de uma mulher do que o ódio de um homem.", "Uma vida sem desafios não vale a pena ser vivida.", "O amigo deve ser como o dinheiro, cujo valor já conhecemos antes de termos necessidade dele.", "Conhece-te a ti mesmo e conhecerás o universo e os deuses.", "Existe apenas um bem, o saber, e apenas um mal, a ignorância.", "Meu conselho é que se case. Se você arrumar uma boa esposa, será feliz; se arrumar uma esposa ruim, se tornará um filósofo.", "Sob a direção de um forte general, não haverá jamais soldados fracos.", "Aquilo que não puderes controlar, não ordenes.", "A sabedoria começa na reflexão.", "Não penses mal dos que procedem mal; pensa somente que estão equivocados.", "Três coisas devem ser feitas por um juiz: ouvir atentamente, considerar sobriamente e decidir imparcialmente.", "O que deve caracterizar a juventude é a modéstia, o pudor, o amor, a moderação, a dedicação, a diligência, a justiça, a educação. São estas as virtudes que devem formar o seu caráter."],
    "Platão": ["O conhecimento que não conduz à ação é inútil.", "A medida de um homem é o que ele faz com o poder.", "De todos os animais selvagens, o homem jovem é o mais difícil de domar", "A medida de um homem é o que ele faz com poder.", "Deve-se temer a velhice, porque ela nunca vem só. Bengalas são provas de idade e não de prudência.", "Quem comete uma injustiça é sempre mais infeliz que o injustiçado.", "A opinião é o meio-termo entre o conhecimento e a ignorância.", "Muitos odeiam a tirania apenas para que possam estabelecer a sua.", "Tente mover o mundo, mas comece movendo a si mesmo.", "Não há nada bom nem mau a não ser estas duas coisas: a sabedoria que é um bem e a ignorância que é um mal.", "A primeira e maior vitória é conquistar a si mesmo; ser conquistado por si mesmo é de todas as coisas a mais vergonhosa e vil.", "Buscar e aprender, na realidade, não são mais do que recordar.", "A verdade é o princípio de todo bem para os deuses e de todo bem para o homem.", "Quem ama extremamente, deixa de viver em si e vive no que ama.", "Tudo quanto vive provém daquilo que morreu.", "Os homens não desejam aquilo que fazem, mas os objetivos que os levam a fazer aquilo que fazem."],
    "Maquiavel": ["Os fins justificam os meios.",
    "O homem prudente deve sempre seguir os caminhos traçados pelos grandes, e imitar aqueles que foram excelentes, para que, se não alcançar a virtude deles, ao menos neles some algo da grandeza deles.",
    "É melhor ser temido do que amado, se não se pode ser ambos.",
    "O que acontece uma vez pode nunca mais acontecer, mas o que acontece duas vezes certamente acontecerá uma terceira vez.",
    "Os homens esquecem mais rapidamente a morte do pai do que a perda do patrimônio.",
    "Quem se torna senhor de uma cidade acostumada a viver livre, e não a submeter-se a nenhum senhor, se quiser mantê-la, deve destruí-la.",
    "Aqueles que querem conquistar sempre, mas não se preocupam com os meios para tanto, certamente arruinam-se.",
    "Os homens devem ser acariciados ou eliminados, porque se vingarão de ofensas leves, mas não poderão vingar-se de ofensas graves.",
    "Nada é mais fácil do que enganar a si mesmo, pois o que deseja cada um está tão próximo que os olhos não conseguem focar.",
    "Os homens, esquecendo-se de que tudo homem é mau, a menos que seja obrigado a ser bom, rendem-se com facilidade à promessa alheia.", "O príncipe que confia na fortuna é perdido.",
    "Os homens, em geral, julgam mais pelos olhos do que pelas mãos, pois todos podem ver, mas poucos podem tocar.",
    "A política tem uma fonte divina e uma humana. Muitos acreditam que a sorte e a oportunidade governam o mundo, mas a sabedoria e o engenho humano são os verdadeiros arquitetos do poder.",
    "Um homem que não seja amado ou temido não tem meios para conservar-se.",
    "É melhor ser impetuoso do que circunspecto, porque a fortuna é mulher, e é necessário, para dominá-la, maltratá-la e golpeá-la.",
    "O político deve saber ser mau como a serpente, para evitar a mordedura, e santo como a pomba, para evitar a calúnia.",
    "Os homens são tão simples e se sujeitam tanto às necessidades presentes que aquele que engana sempre encontrará alguém que se deixe enganar.",
    "Aqueles que menos podem fazer um serviço fazem a guerra, e os mais ricos fazem as leis.",
    "Não há outra maneira de proteger-se contra a adulação do povo senão fazer-se temido por ele.",
    "A paciência serve de apoio ao poder, e a lentidão nunca prejudicou a rapidez."]
};

function obterCitacao() {
    const filosofo = escolherAleatorio(Object.keys(filosofos));
    const citacao = escolherAleatorio(filosofos[filosofo]);

    const elementoCitacao = document.getElementById("quote");
    elementoCitacao.innerHTML = `<strong>${filosofo}:</strong> ${citacao}`;
}

function escolherAleatorio(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
