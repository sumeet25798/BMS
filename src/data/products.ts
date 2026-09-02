export type BatteryModel = {
  id: string;
  name: string;
  voltage: string;
  capacity: string;
  application: string;
  features: string[];
  highlight: boolean;
};

export const batteryModels: BatteryModel[] = [
  {
    id: '51-2v-105ah',
    name: 'KSO STAR 51.2V – 105Ah',
    voltage: '51.2V',
    capacity: '105Ah',
    application: 'E-Rickshaw / EV',
    features: ['LFP Chemistry', 'Smart BMS', 'IoT Enabled', 'Fast Charging'],
    highlight: true,
  },
  {
    id: '51-2v-132ah',
    name: 'KSO STAR 51.2V – 132Ah',
    voltage: '51.2V',
    capacity: '132Ah',
    application: 'E-Rickshaw / Solar ESS',
    features: ['LFP Chemistry', 'Extended Range', 'Smart BMS', 'IoT Enabled'],
    highlight: true,
  },
  {
    id: '60-2v-105ah',
    name: 'KSO STAR 60.2V – 105Ah',
    voltage: '60.2V',
    capacity: '105Ah',
    application: 'E-Rickshaw / EV',
    features: ['LFP Chemistry', 'High Power Output', 'Smart BMS', 'IoT Enabled'],
    highlight: true,
  },
  {
    id: '64-4v-105ah',
    name: 'KSO STAR 64.4V – 105Ah',
    voltage: '64.4V',
    capacity: '105Ah',
    application: 'E-Rickshaw / EV',
    features: ['LFP Chemistry', 'Premium Grade Cells', 'Smart BMS', 'IoT Enabled'],
    highlight: true,
  },
];
