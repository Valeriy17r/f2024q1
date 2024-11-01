const musictons ={
    Cdur: ['до','ре','ми','фа', 'соль', 'ля', 'си'],
    Ddur:['ре', 'ми', 'фа диез', 'соль', 'ля', 'си', 'до диез', 'ре'],   
}

function t53(tons){
    const tresvuchie = []
    for(const musicton in musictons){
        if(musicton === tons){
           tresvuchie.push(...musictons[tons])
        }
    }
    return tresvuchie
}

console.log(t53('Cdur'))