
interface FielddLeadFormOptions {
  container: string;
  business: string;
  hideTitle?: boolean;
  hideLabels?: boolean;
  customSuccessMessage?: string;
}

interface Fieldd {
  leadForm: (options: FielddLeadFormOptions) => void;
}

interface Window {
  Fieldd?: Fieldd;
}
