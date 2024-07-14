interface CustomSubstackWidgetConfig {
  substackUrl: string;
  placeholder: string;
  buttonText: string;
  theme: string;
}

interface Window {
  CustomSubstackWidget: CustomSubstackWidgetConfig;
}
