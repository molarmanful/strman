msplit=_=>_.split`\n`.map(x=>x.split``)
mjoin=_=>_.map(x=>x.join``).join`\n`

mmap=_=>$=>mjoin(msplit(pad(_)).map((x,y)=>x.map((a,b)=>$(a,y,b))))

mget=_=>(r,c,R=msplit(pad(_))[0].length,C=msplit(pad(_)).length)=>mjoin(msplit(pad(_)).map((x,y)=>y>=r&&y<R?x.map((a,b)=>b>=c&&b<C?a:'').filter(x=>x):'').filter(x=>x))
mgetc=_=>r=>c=>(msplit(pad(_))[r]||'')[c]
mgety=_=>$=>msplit(pad(_)).map(x=>x[$]).join`\n`
mgetx=_=>$=>msplit(pad(_))[$].join``

mrm=_=>(r,c,R=msplit(pad(_))[0].length,C=msplit(pad(_)).length)=>mjoin(msplit(pad(_)).map((x,y)=>y>=r&&y<R?x.map((a,b)=>b>=c&&b<C?' ':a):x))
mrmc=_=>(r,c)=>(_=msplit(_),_[r][c]=' ',mjoin(_))
mrmy=_=>$=>mjoin(msplit(pad(_)).map(x=>x.map((a,b)=>b==$?'':a)))
mrmx=_=>$=>pad(_).split`\n`.map((x,y)=>y==$?'':x).filter(x=>x).join`\n`

transpose=_=>mjoin([...Array(Math.max(...msplit(_).map(x=>x.length)))].map((a,b)=>msplit(_).map(x=>x[b]||' ')))

pad=_=>transpose(transpose(_))

flipy=_=>mjoin(msplit(pad(_)).map(x=>x.reverse()))
flipx=_=>mjoin(msplit(pad(_)).reverse())

rotate=_=>($=1)=>($%=4,$=$<0?$+4:$,[_,flipy(transpose(_)),flipy(flipx(_)),transpose(flipy(_))][$])

concaty=_=>$=>pad(_).split`\n`.map((x,y)=>x+pad($).split`\n`[y]).join`\n`
concatx=_=>$=>pad(_)+`\n`+pad($)
