import {SparqlResultImageComponent} from '../query-result/results/sparql-result-image/sparql-result-image.component';
import {SparqlResultUrlComponent} from '../query-result/results/sparql-result-url/sparql-result-url.component';
import {SparqlResultValComponent} from '../query-result/results/sparql-result-val/sparql-result-val.component';

export interface SparqlResult {
  //cls: { new(): SparqlResultImageComponent}|{ new(): SparqlResultUrlComponent}|{ new(): SparqlResultValComponent };
  cls: any;
  value: string;
}
