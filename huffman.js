var codes={};
var text='aamfdfndfajbnfjucbnfjqabubvavab';

function freq(str){
    var freq_lst={};
    for(var i=0;i<str.length;i++){
        if(str[i] in freq_lst)
            freq_lst[str[i]]+=1;
        else
            freq_lst[str[i]]=1;
    }
    return freq_lst
}

function sortFreq(freqLst){
    var sortLst=[],i=0;
    for(var letter in freqLst){
        sortLst[i]=[freqLst[letter],letter];
        i++;
    }
    sortLst.sort(function(a,b){return a[0]-b[0]});
    return sortLst;
}

function buildTree(sort_lst){
    if(sort_lst.length==0)
	    throw "Error!!!! Empty list...";
	else if(sort_lst.length==1)
	    return sort_lst[0][1];
	else{
	    comb_wt=sort_lst[0][0]+sort_lst[1][0];
		comb_node=[sort_lst[0][1],sort_lst[1][1]];
		sort_lst=sort_lst.slice(2);
		sort_lst.unshift([comb_wt,comb_node]);
		sort_lst.sort(function(a,b){return a[0]-b[0]})
		return (buildTree(rest_lst));
	}
}

function assign_codes(node,cod){
    cod=cod||"";
    if(typeof node === typeof cod){
	    codes[node]=cod;
		return;
	}
	else{
	    assign_codes(node[0],cod+"0");
		assign_codes(node[1],cod+"1");
	}
}

function encode(str){
    var encoded_str="";
	for(i=0;i<str.length;i++)
	    encoded_str+=codes[str[i]];
	return encoded_str;
}

function decode(tree,encoded_str){
    var decoded_str="";
	node=tree;
	for(var i=0;i<encoded_str.len;i++){
	    if(encoded_str[i]=="0")
		    node=node[0];
		else
		    node=node[1];
		if(typeof node===typeof ""){
		    decoded_str+=node;
			node=tree;
		}
	}
	return decoded_str;
}

assign_codes(buildTree(sortFreq(freq(text))));
encode(text);

