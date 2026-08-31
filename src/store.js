const KEY='bel-leis-calculator-v1';
const defaults={recipes:[],batches:[],molds:[],purchases:[],inventory:[],settings:{mode:'guided',units:'g'}};
export function loadStore(){try{return{...structuredClone(defaults),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return structuredClone(defaults)}}
export function saveStore(s){localStorage.setItem(KEY,JSON.stringify(s));return s}
export function saveRecipeVersion(store,recipe){const now=new Date().toISOString();let item=store.recipes.find(r=>r.id===recipe.id);if(!item){item={id:recipe.id||crypto.randomUUID(),name:recipe.name||'Untitled Recipe',createdAt:now,versions:[]};store.recipes.unshift(item)}const version={id:crypto.randomUUID(),createdAt:now,note:recipe.versionNote||'',snapshot:recipe};item.name=recipe.name;item.versions.unshift(version);item.updatedAt=now;saveStore(store);return{item,version}}
export function startBatch(store,recipe){const now=new Date().toISOString();const b={id:crypto.randomUUID(),recipeName:recipe.name,recipeSnapshot:recipe,state:'PLANNED',createdAt:now,actuals:{},notes:''};store.batches.unshift(b);saveStore(store);return b}
export function exportBackup(store){return JSON.stringify({format:'BelLeisBackup',version:1,exportedAt:new Date().toISOString(),data:store},null,2)}
export function importBackup(text){const x=JSON.parse(text);if(x.format!=='BelLeisBackup'||!x.data)throw Error('Not a Bel Lei\'s backup file.');saveStore(x.data);return x.data}
