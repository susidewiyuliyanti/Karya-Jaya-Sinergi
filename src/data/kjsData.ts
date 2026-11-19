export type Language = 'id' | 'en';

export type ProjectCategory =
  | 'all'
  | 'plc-control'
  | 'inverter-mcc'
  | 'pump-infra'
  | 'cad-design';

export type FAQCategory = 'all' | 'maintenance' | 'plc-troubleshooting' | 'safety-standards';

export interface FAQItem {
  id: string;
  number: string;
  category: Exclude<FAQCategory, 'all'>;
  categoryLabel: { id: string; en: string };
  question: { id: string; en: string };
  answer: { id: string; en: string };
  highlights: string[];
}

export interface ServiceItem {
  index: string;
  code: string;
  title: { id: string; en: string };
  subtitle: { id: string; en: string };
  description: { id: string; en: string };
  specs: string[];
  featured?: boolean;
  image: string;
}

export interface ProjectItem {
  id: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: { id: string; en: string };
  title: { id: string; en: string };
  subtitle: { id: string; en: string };
  description: { id: string; en: string };
  components: string[];
  scope: { id: string; en: string };
  image: string;
  aspect: 'wide' | 'tall' | 'square';
}

export const COMPANY_INFO = {
  legalName: 'CV. KARYA JAYA SINERGI',
  shortName: 'Karya Jaya Sinergi',
  tagline: 'Engineering and Electrical Solutions',
  lineOfBusiness: {
    id: 'Wiring Panel & Instalasi Listrik Industri',
    en: 'Electrical Panel Manufacturing & Industrial Installation',
  },
  established: '2021',
  licenseNumber: '586/044-Ds. Brb/X/2026',
  address: 'Jl. Kebon Dalam No. 2 Rt 001/007, Buaran Bambu, PakuHaji, Tangerang - 15570',
  phoneDisplay: '+62 856-9722-7884',
  phoneRaw: '6285697227884',
  email: 'karyajayasinergi@gmail.com',
  pdfUrl: '/assets/aistudio/COMPANY_PROFILE_KJS_2026_ad22e191.pdf',
};

export const SERVICES: ServiceItem[] = [
  {
    index: '01',
    code: 'MDP',
    title: {
      id: 'Main Distribution Panel',
      en: 'Main Distribution Panel',
    },
    subtitle: {
      id: 'Distribusi Daya Utama',
      en: 'Primary Power Distribution',
    },
    description: {
      id: 'Perancangan dan perakitan panel distribusi daya utama untuk fasilitas industri maupun gedung komersial, lengkap dengan proteksi arus lebih dan tata busbar standar nasional.',
      en: 'Design and assembly of primary power distribution panels for industrial facilities and commercial buildings, complete with overcurrent protection and national-standard busbar architecture.',
    },
    specs: ['ACB / MCCB Main Incoming', 'Copper Busbar System', 'Metering & Surge Protection'],
    featured: true,
    image: '/assets/projects/panel_kontrol_workshop.jpg',
  },
  {
    index: '02',
    code: 'SDP',
    title: {
      id: 'Sub Distribution Panel',
      en: 'Sub Distribution Panel',
    },
    subtitle: {
      id: 'Distribusi Beban Cabang',
      en: 'Branch Load Distribution',
    },
    description: {
      id: 'Panel distribusi area untuk menyalurkan beban listrik cabang ke lini produksi, pencahayaan, dan utilitas secara andal serta terstruktur.',
      en: 'Area distribution panels engineered to route branch electrical loads to production lines, lighting, and facility utilities reliably.',
    },
    specs: ['MCCB & MCB Feeder', 'Labeling Terminal Terstruktur', 'IP54 Enclosure Ready'],
    image: '/assets/projects/blower_3motor_panel.jpg',
  },
  {
    index: '03',
    code: 'MCC',
    title: {
      id: 'Motor Control Center',
      en: 'Motor Control Center',
    },
    subtitle: {
      id: 'Kendali Motor Multi-Feeder',
      en: 'Multi-Feeder Motor Control',
    },
    description: {
      id: 'Sistem kendali terpusat untuk operasional motor mesin pabrik seperti screw press, conveyor, dan blower dengan proteksi overload dan monitoring arus.',
      en: 'Centralized control assemblies for factory motors including screw presses, conveyors, and blowers with overload protection and current metering.',
    },
    specs: ['DOL / Star-Delta Starter', 'Ammeter & Voltmeter Panel', 'Remote & Local Interlock'],
    image: '/assets/projects/mcc_plant_row.jpg',
  },
  {
    index: '04',
    code: 'CAP BANK',
    title: {
      id: 'Capacitor Bank',
      en: 'Capacitor Bank',
    },
    subtitle: {
      id: 'Koreksi Faktor Daya',
      en: 'Power Factor Correction',
    },
    description: {
      id: 'Optimasi efisiensi energi listrik pabrik melalui pengaturan step otomatis menggunakan Power Factor Regulator guna menekan rugi daya dan penalti kVARh.',
      en: 'Industrial energy efficiency optimization via automated multi-step Power Factor Regulators to reduce reactive losses and utility penalties.',
    },
    specs: ['Auto Power Factor Regulator', 'Contactor Switching Steps', 'Thermal & Fuse Protection'],
    image: '/assets/projects/cap_bank_moulding.jpg',
  },
  {
    index: '05',
    code: 'PLC',
    title: {
      id: 'Programmable Logic Controller',
      en: 'Programmable Logic Controller',
    },
    subtitle: {
      id: 'Otomasi & Integrasi HMI',
      en: 'Automation & HMI Integration',
    },
    description: {
      id: 'Pemrograman dan integrasi sistem otomasi industri berbasis PLC Siemens S7-1200, Omron CP1H, serta layar HMI Simatic untuk kontrol proses produksi presisi.',
      en: 'Industrial process automation programming and integration featuring Siemens S7-1200, Omron CP1H PLCs, and Simatic HMI interfaces.',
    },
    specs: ['Siemens S7-1200 & Omron CP1H', 'HMI Touch Screen Scada', 'I/O Relay & Safety Interlock'],
    featured: true,
    image: '/assets/projects/plc_siemens_hmi.jpg',
  },
  {
    index: '06',
    code: 'INVERTER',
    title: {
      id: 'Inverter & VSD Drive',
      en: 'Inverter & VSD Drive',
    },
    subtitle: {
      id: 'Pengaturan Kecepatan Motor',
      en: 'Variable Speed Control',
    },
    description: {
      id: 'Implementasi Variable Speed Drive multi-motor menggunakan Schneider Altivar dan Hitachi WJ-C1 untuk pompa, fan, dan lini conveyor dengan efisiensi daya tinggi.',
      en: 'Multi-motor Variable Speed Drive panels utilizing Schneider Altivar and Hitachi WJ-C1 units for pumps, fans, and automated conveyors.',
    },
    specs: ['Schneider Altivar & Hitachi WJ-C1', 'Soft Start & Speed Profiling', 'Forced Cooling Ventilation'],
    image: '/assets/projects/inverter_multidrive_vsd.jpg',
  },
];

export const K3_PRINCIPLES = [
  {
    number: '01',
    title: { id: 'APD Lengkap & Standar', en: 'Complete PPE Compliance' },
    desc: {
      id: 'Seluruh teknisi diwajibkan mengenakan alat pelindung diri berstandar kelistrikan selama fabrikasi maupun instalasi di lapangan.',
      en: 'All field engineers strictly wear electrical-rated personal protective equipment during fabrication and on-site installation.',
    },
  },
  {
    number: '02',
    title: { id: 'Kepatuhan SOP & Lockout-Tagout', en: 'SOP & Lockout-Tagout Protocol' },
    desc: {
      id: 'Setiap pengerjaan panel bertegangan mengikuti prosedur isolasi energi dan penguncian (LOTO) secara ketat.',
      en: 'Every energized system intervention follows strict energy isolation and Lockout-Tagout (LOTO) verification.',
    },
  },
  {
    number: '03',
    title: { id: 'Verifikasi Sebelum Energize', en: 'Pre-Energize Safety Audit' },
    desc: {
      id: 'Pengujian tahanan isolasi, kontinuitas, serta torsi terminal wajib lolos inspeksi sebelum panel dialiri tegangan.',
      en: 'Insulation resistance, continuity checks, and terminal torque audits are mandatory prior to system energization.',
    },
  },
  {
    number: '04',
    title: { id: 'Pelaporan Bahaya Proaktif', en: 'Proactive Hazard Reporting' },
    desc: {
      id: 'Identifikasi dan pelaporan potensi risiko kerja dilakukan seketika guna menjaga lingkungan proyek nihil insiden.',
      en: 'Immediate hazard identification and escalation protocols maintain a zero-incident jobsite environment.',
    },
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'robotic-conveyor',
    category: 'plc-control',
    categoryLabel: { id: 'Panel Kontrol & PLC', en: 'PLC & Control' },
    title: {
      id: 'Control Robotic Palletizer & Conveyor Stainless',
      en: 'Robotic Palletizer & Stainless Conveyor Control',
    },
    subtitle: { id: 'Integrasi Robot, Sensor & Area Keselamatan', en: 'Robot, Conveyor & Safety Interlock' },
    description: {
      id: 'Integrasi panel kendali untuk sistem robot palletizer, jalur conveyor stainless steel, sensor deteksi lini produksi, serta interlock pagar pengaman area terbatas.',
      en: 'Integrated control engineering for robotic palletizers, stainless steel conveyor lines, optical line sensors, and restricted safety-fence interlocks.',
    },
    components: ['PLC Automation Core', 'Safety Fence Interlock', 'Stainless Conveyor Drive', 'Field Sensor Array'],
    scope: { id: 'Desain sistem, wiring lapangan, integrasi & commissioning', en: 'System design, field wiring, integration & commissioning' },
    image: '/assets/projects/robotic_palletizer_line.jpg',
    aspect: 'wide',
  },
  {
    id: 'inverter-multidrive',
    category: 'inverter-mcc',
    categoryLabel: { id: 'Inverter & MCC', en: 'Inverter & MCC' },
    title: {
      id: 'Panel Inverter / VSD Multi Drive',
      en: 'Multi-Drive Inverter / VSD Control Cabinet',
    },
    subtitle: { id: 'Schneider Altivar & Hitachi WJ-C1', en: 'Schneider Altivar & Hitachi WJ-C1' },
    description: {
      id: 'Perakitan kabinet pengatur kecepatan multi motor dengan kombinasi drive Schneider Altivar dan Hitachi WJ-C1, dilengkapi MCB proteksi individual, ducting rapi, dan penomoran kabel terlabel.',
      en: 'Multi-motor speed control cabinet combining Schneider Altivar and Hitachi WJ-C1 drives with individual MCB protection, structured ducting, and labeled terminals.',
    },
    components: ['Schneider Altivar VSD', 'Hitachi WJ-C1 Inverter', 'MCB Distribution Rail', 'Labeled Terminal Block'],
    scope: { id: 'Perakitan workshop, pelabelan kabel & pengujian beban', en: 'Workshop assembly, cable labeling & load testing' },
    image: '/assets/projects/inverter_multidrive_vsd.jpg',
    aspect: 'wide',
  },
  {
    id: 'plc-siemens-omron',
    category: 'plc-control',
    categoryLabel: { id: 'Panel Kontrol & PLC', en: 'PLC & Control' },
    title: {
      id: 'Panel PLC Siemens S7-1200 & Omron HMI VCT',
      en: 'Siemens S7-1200 & Omron HMI VCT Control Panel',
    },
    subtitle: { id: 'Sistem Kontrol Proses & Antarmuka Simatic', en: 'Process Automation & Simatic HMI' },
    description: {
      id: 'Panel kontrol otomatis menggunakan PLC Siemens S7-1200 dan Omron CP1H yang terhubung dengan layar sentuh HMI Simatic untuk pemantauan proses tangki dan aktuator secara real-time.',
      en: 'Automated process control panel uniting Siemens S7-1200 and Omron CP1H PLCs with a Simatic HMI touchscreen for real-time process supervision.',
    },
    components: ['PLC Siemens S7-1200', 'PLC Omron CP1H', 'HMI Simatic Touch', '24VDC Power Supply & Relay'],
    scope: { id: 'Pemrograman PLC/HMI, fabrikasi panel & commissioning', en: 'PLC/HMI programming, panel fabrication & commissioning' },
    image: '/assets/projects/plc_siemens_hmi.jpg',
    aspect: 'wide',
  },
  {
    id: 'mcc-plant-screwpress',
    category: 'inverter-mcc',
    categoryLabel: { id: 'Inverter & MCC', en: 'Inverter & MCC' },
    title: {
      id: 'Panel MCC Plant — Kontrol Screw Press',
      en: 'Plant Motor Control Center — Screw Press Line',
    },
    subtitle: { id: 'Multi Feeder Motor, Ammeter & Emergency', en: 'Multi-Feeder Motor & Field Indicators' },
    description: {
      id: 'Penyediaan dan instalasi rangkaian kompartemen Motor Control Center (MCC) untuk pengendalian motor mesin screw press pabrik lengkap dengan indikator, ammeter, voltmeter, dan lampu peringatan.',
      en: 'Supply and installation of multi-compartment Motor Control Centers for industrial screw press operations with analog metering and warning beacons.',
    },
    components: ['Multi Feeder Compartment', 'Incoming Breaker', 'Ammeter & Voltmeter', 'Start/Stop & EMG Station'],
    scope: { id: 'Instalasi plant, terminasi kabel daya & uji operasional', en: 'Plant installation, power termination & operational test' },
    image: '/assets/projects/mcc_plant_row.jpg',
    aspect: 'wide',
  },
  {
    id: 'cap-bank-moulding',
    category: 'inverter-mcc',
    categoryLabel: { id: 'Inverter & MCC', en: 'Inverter & MCC' },
    title: {
      id: 'Panel Kapasitor Bank — Lini Moulding',
      en: 'Capacitor Bank Panel — Moulding Facility',
    },
    subtitle: { id: 'Koreksi Faktor Daya Otomatis', en: 'Automated Power Factor Correction' },
    description: {
      id: 'Panel perbaikan faktor daya otomatis untuk mesin moulding industri, dilengkapi Power Factor Regulator digital, kontaktor khusus kapasitor, serta tombol kontrol per step.',
      en: 'Automated power factor correction assembly for industrial moulding lines, equipped with digital PF regulator, capacitor contactors, and step switches.',
    },
    components: ['Power Factor Regulator', 'Capacitor Duty Contactors', 'Heavy-Duty Capacitors', 'Step Selector & Fuse'],
    scope: { id: 'Perakitan, wiring internal, testing & commissioning', en: 'Assembly, internal wiring, testing & commissioning' },
    image: '/assets/projects/cap_bank_moulding.jpg',
    aspect: 'tall',
  },
  {
    id: 'panel-kontrol-workshop',
    category: 'plc-control',
    categoryLabel: { id: 'Panel Kontrol & PLC', en: 'PLC & Control' },
    title: {
      id: 'Panel Kontrol Utama — Perakitan Workshop',
      en: 'Main Electrical Control Cabinet — Workshop Assembly',
    },
    subtitle: { id: 'Standar Penandaan Kabel & Pengujian Fungsi', en: 'Precision Wire Marking & FAT Testing' },
    description: {
      id: 'Perakitan panel kontrol multi-komponen di workshop CV. Karya Jaya Sinergi dengan tata letak ducting sistematis, ferule penandaan kabel, sistem proteksi, dan blok terminal teratur.',
      en: 'Multi-tier control cabinet fabricated at our workshop featuring systematic cable ducting, numbered wire ferrules, circuit protection, and organized terminal blocks.',
    },
    components: ['Double-Door Free Standing', 'Numbered Wire Ferrules', 'MCB & Relay Bank', 'Bottom Terminal Rail'],
    scope: { id: 'Fabrikasi workshop, quality control & commissioning', en: 'Workshop fabrication, QA testing & commissioning' },
    image: '/assets/projects/panel_kontrol_workshop.jpg',
    aspect: 'tall',
  },
  {
    id: 'conveyor-altivar',
    category: 'inverter-mcc',
    categoryLabel: { id: 'Inverter & MCC', en: 'Inverter & MCC' },
    title: {
      id: 'Panel Conveyor Belt & Blower — Altivar VSD',
      en: 'Conveyor Belt & Blower Panel — Altivar VSD',
    },
    subtitle: { id: 'Inverter Altivar, MCCB & Pintu Kaca Inspeksi', en: 'Altivar VSD, MCCB & Inspection Window' },
    description: {
      id: 'Panel kendali kecepatan conveyor belt dan blower menggunakan inverter Schneider Altivar yang dipadukan dengan MCCB proteksi utama serta pintu luar berjendela inspeksi.',
      en: 'Conveyor and blower control cabinet pairing a Schneider Altivar VSD with primary MCCB breakers and a sealed glass inspection door.',
    },
    components: ['Schneider Altivar VSD', 'MCCB Protection', 'Pilot Lamp & EMG', 'Tempered Inspection Door'],
    scope: { id: 'Perakitan, parameterisasi inverter & uji jalan', en: 'Assembly, drive parameterization & trial run' },
    image: '/assets/projects/conveyor_altivar_vsd.jpg',
    aspect: 'tall',
  },
  {
    id: 'hidrant-pump-panel',
    category: 'pump-infra',
    categoryLabel: { id: 'Pompa & Infrastruktur', en: 'Pumps & Infrastructure' },
    title: {
      id: 'Panel Kontrol Pompa Hidrant & Jockey Pump',
      en: 'Fire Hydrant & Jockey Pump Control Panel',
    },
    subtitle: { id: 'Selector Auto / Manual & Proteksi Kebakaran', en: 'Auto / Manual Selector & Fire Protection' },
    description: {
      id: 'Panel merah standar proteksi kebakaran untuk mengendalikan Main Hydrant Pump, Jockey Pump, dan Transfer Pump lengkap dengan meter digital dan pengujian sistem di lokasi.',
      en: 'Dedicated fire-protection red cabinet controlling Main Hydrant, Jockey, and Transfer pumps with digital metering and on-site pressure commissioning.',
    },
    components: ['Digital Volt/Amp Meter', 'Auto / Manual Selector', 'Pressure Switch Interface', 'Motor Overload Relay'],
    scope: { id: 'Perakitan, instalasi ruang pompa & uji fungsi tekanan', en: 'Fabrication, pump room installation & pressure testing' },
    image: '/assets/projects/hidrant_pump_panel.jpg',
    aspect: 'square',
  },
  {
    id: 'pompa-penanggulangan-banjir',
    category: 'pump-infra',
    categoryLabel: { id: 'Pompa & Infrastruktur', en: 'Pumps & Infrastructure' },
    title: {
      id: 'Panel Pompa Submersible Penanggulangan Banjir',
      en: 'Flood Control Submersible Pump Panel',
    },
    subtitle: { id: 'Kontrol Level Air Otomatis & Outdoor Shelter', en: 'Automated Water Level Control & Outdoor Housing' },
    description: {
      id: 'Sistem kendali pompa submersible area luar ruangan dengan rumah pelindung baja tahan cuaca, sensor pelampung level air otomatis, dan proteksi motor penuh.',
      en: 'Outdoor submersible pump control system housed in a weatherproof steel shelter with automatic float-switch level sensing and motor protection.',
    },
    components: ['Outdoor Weatherproof Box', 'Water Level Float Control', 'Phase Failure Relay', 'Submersible Pump Starters'],
    scope: { id: 'Fabrikasi panel outdoor, instalasi sumuran & testing', en: 'Outdoor panel build, sump installation & field testing' },
    image: '/assets/projects/pompa_banjir_outdoor.jpg',
    aspect: 'wide',
  },
  {
    id: 'hydraulic-power-pack',
    category: 'pump-infra',
    categoryLabel: { id: 'Pompa & Infrastruktur', en: 'Pumps & Infrastructure' },
    title: {
      id: 'Kontrol Power Pack & Sistem Hidrolik',
      en: 'Hydraulic Power Pack & Solenoid Control',
    },
    subtitle: { id: 'Valve Solenoid, Piping & Panel Aktuator', en: 'Solenoid Valves, Piping & Control Cabinet' },
    description: {
      id: 'Instalasi kelistrikan dan integrasi kabel kontrol untuk unit power pack hidrolik, manifold valve solenoid, dan stasiun operator di area produksi.',
      en: 'Electrical wiring and control integration for multi-valve hydraulic power packs, solenoid manifolds, and operator control stations.',
    },
    components: ['Solenoid Valve Wiring', 'Hydraulic Power Unit', 'Junction Box IP65', 'Operator Control Switch'],
    scope: { id: 'Instalasi lapangan, wiring solenoid & commissioning', en: 'Field installation, solenoid wiring & commissioning' },
    image: '/assets/projects/hydraulic_power_pack.jpg',
    aspect: 'wide',
  },
  {
    id: 'instalasi-cable-tray',
    category: 'pump-infra',
    categoryLabel: { id: 'Pompa & Infrastruktur', en: 'Pumps & Infrastructure' },
    title: {
      id: 'Instalasi Gedung, Cable Tray & Conduit Pabrik',
      en: 'Factory Cable Tray, Stainless Pipe & Conduit',
    },
    subtitle: { id: 'Jalur Kabel Industri & Gudang Produksi', en: 'Industrial Cable Routing & Facility Wiring' },
    description: {
      id: 'Pengerjaan infrastruktur distribusi kelistrikan gedung dan area pabrik meliputi pemasangan cable tray heavy-duty, pipa conduit stainless steel, dan penarikan kabel daya utama.',
      en: 'Complete facility electrical infrastructure covering heavy-duty cable trays, stainless steel conduit routing, and main feeder cabling.',
    },
    components: ['Heavy-Duty Cable Tray', 'Stainless Steel Conduit', 'High-Bay Distribution', 'Grounding & Bonding'],
    scope: { id: 'Pemasangan tray, penarikan kabel & uji megger', en: 'Tray erection, cable pulling & megger insulation test' },
    image: '/assets/projects/instalasi_cable_tray.jpg',
    aspect: 'square',
  },
  {
    id: 'cad-star-delta',
    category: 'cad-design',
    categoryLabel: { id: 'Desain AutoCAD', en: 'AutoCAD Design' },
    title: {
      id: 'Desain AutoCAD — Panel Star Delta 30HP & Inverter 15kW',
      en: 'AutoCAD Engineering — 30HP Star-Delta & 15kW Inverter',
    },
    subtitle: { id: 'Single Line, Wiring Diagram & Layout Komponen', en: 'Single-Line, Wiring Schematic & Panel Layout' },
    description: {
      id: 'Penyusunan gambar teknis rekayasa menggunakan AutoCAD mencakup single line diagram, wiring kontrol detail, dimensi penempatan pintu, serta daftar komponen (BOM) sebelum produksi.',
      en: 'Detailed AutoCAD engineering packages covering single-line diagrams, control schematics, enclosure door cutouts, and complete Bill of Materials prior to assembly.',
    },
    components: ['Single Line Diagram', 'Control Wiring Schematic', '1:1 Door Cutout Layout', 'Complete Component BOM'],
    scope: { id: 'Engineering drawing, review spesifikasi & dokumentasi as-built', en: 'Engineering drawing, spec review & as-built documentation' },
    image: '/assets/projects/cad_star_delta_30hp.jpg',
    aspect: 'square',
  },
  {
    id: 'trash-rack-pintu-air',
    category: 'pump-infra',
    categoryLabel: { id: 'Pompa & Infrastruktur', en: 'Pumps & Infrastructure' },
    title: {
      id: 'Panel Kontrol Pintu Air & Trash Rack',
      en: 'Sluice Gate & Trash Rack Control Panel',
    },
    subtitle: { id: 'Kontrol Naik-Turun Pintu & Sistem Interlock', en: 'Gate Hoist Control & Limit Interlocks' },
    description: {
      id: 'Panel kontrol penggerak pintu air dan pembersih sampah (trash rack) dengan sistem interlock batas atas/bawah, kontaktor pembalik arah putar, timer otomatis, dan proteksi MCCB.',
      en: 'Control panel for motorized sluice gates and trash-rack rakes incorporating upper/lower limit interlocks, reversing contactors, timers, and MCCB protection.',
    },
    components: ['Reversing Contactors', 'Limit Switch Interlock', 'MCCB & Timer Relay', 'Status Pilot Indicators'],
    scope: { id: 'Perakitan workshop, simulasi interlock & pengiriman', en: 'Workshop build, interlock simulation & site delivery' },
    image: '/assets/projects/trash_rack_pintu_air.jpg',
    aspect: 'square',
  },
  {
    id: 'timbangan-loadcell',
    category: 'plc-control',
    categoryLabel: { id: 'Panel Kontrol & PLC', en: 'PLC & Control' },
    title: {
      id: 'Panel Timbangan Loadcell 150 kg',
      en: '150 kg Loadcell Weighing Control Panel',
    },
    subtitle: { id: 'Indikator Digital, Kalibrasi & Kontrol Motor', en: 'Digital Weight Indicator & Motor Interlock' },
    description: {
      id: 'Panel terintegrasi dengan indikator timbangan digital loadcell kapasitas 150 kg untuk mengontrol siklus pengisian dan proteksi motor penggerak secara presisi.',
      en: 'Integrated 150 kg loadcell weighing panel combining a digital weight controller with automated batch motor switching and overload protection.',
    },
    components: ['Digital Loadcell Indicator', '3-Phase R-S-T Lamps', 'Contactor & Thermal Relay', 'Calibration & Testing'],
    scope: { id: 'Wiring kontrol, kalibrasi beban & pengujian siklus', en: 'Control wiring, load calibration & cycle verification' },
    image: '/assets/projects/timbangan_loadcell.jpg',
    aspect: 'wide',
  },
  {
    id: 'shot-blasting-panel',
    category: 'plc-control',
    categoryLabel: { id: 'Panel Kontrol & PLC', en: 'PLC & Control' },
    title: {
      id: 'Panel Shot Blasting — Hanging Shot Blast Machine',
      en: 'Hanging Shot Blast Machine Control Panel',
    },
    subtitle: { id: 'Blasting Unit, Bucket Elevator & Dust Collector', en: 'Blasting Units, Elevator & Dust Collector' },
    description: {
      id: 'Panel kontrol terpadu mesin hanging shot blasting yang mengatur urutan kerja Blasting Unit 1 & 2, Driven Hanger, Bucket Elevator, Dust Collector, dan Screw Conveyor.',
      en: 'Sequenced control cabinet operating twin blasting turbines, driven hanger, bucket elevator, dust collector, and screw conveyor.',
    },
    components: ['Twin Blasting Unit Control', '3-Phase Ammeters', 'Sequence Relay Logic', 'Emergency Stop Circuit'],
    scope: { id: 'Perakitan, uji urutan sekuensial & commissioning', en: 'Assembly, sequence verification & commissioning' },
    image: '/assets/projects/shot_blasting_panel.jpg',
    aspect: 'square',
  },
  {
    id: 'blower-3motor',
    category: 'inverter-mcc',
    categoryLabel: { id: 'Inverter & MCC', en: 'Inverter & MCC' },
    title: {
      id: 'Panel Blower — 3 Motor Start / Stop Control',
      en: '3-Motor Blower Start / Stop Control Panel',
    },
    subtitle: { id: 'Indikator R-S-T, Trip 1-3 & Wiring Pintu Rapi', en: 'R-S-T Phase Lamps, Trip Indicators & Door Harness' },
    description: {
      id: 'Panel kendali 3 unit motor blower dengan tata letak tombol Start/Stop dan indikator Trip terpisah per motor, tombol darurat terpusat, serta ikatan harness kabel pintu yang rapi.',
      en: 'Dedicated 3-motor blower panel featuring individual Start/Stop buttons, Trip fault lamps, central Emergency Stop, and neatly bundled door wiring harnesses.',
    },
    components: ['3x Contactor & Overload', 'R-S-T Phase Indicators', 'Trip & Run Pilot Lamps', 'Spiral Door Harness'],
    scope: { id: 'Fabrikasi panel, uji trip simulasi & serah terima', en: 'Panel fabrication, simulated trip test & handover' },
    image: '/assets/projects/blower_3motor_panel.jpg',
    aspect: 'tall',
  },
];

export const CLIENTS = [
  { index: '01', name: 'PT. Mahaka Cipta Nusantara', sector: { id: 'Industri & Infrastruktur', en: 'Industrial & Infrastructure' } },
  { index: '02', name: 'PT. Karunia Teknik Indonesia', sector: { id: 'Rekayasa Teknik', en: 'Technical Engineering' } },
  { index: '03', name: 'PT. Indo Cipta Ban', sector: { id: 'Manufaktur Karet & Ban', en: 'Rubber & Tire Manufacturing' } },
  { index: '04', name: 'PT. Conindo Kawan Sejati', sector: { id: 'Konstruksi & Industri', en: 'Construction & Industry' } },
  { index: '05', name: 'PT. Kali Besar Artha Perkasa', sector: { id: 'Komersial & Properti', en: 'Commercial & Facilities' } },
  { index: '06', name: 'PT. Bintaro Teknik', sector: { id: 'Kontraktor MEP', en: 'MEP Contracting' } },
  { index: '07', name: 'CV. Surya Mega Sinergi', sector: { id: 'Suplai & Solusi Energi', en: 'Energy & Supply Solutions' } },
  { index: '08', name: 'PT. Era Mandiri Teknik', sector: { id: 'Otomasi & Manufaktur', en: 'Automation & Manufacturing' } },
  { index: '09', name: 'PT. Nippon Sarana Konstruksi', sector: { id: 'Konstruksi Pabrik', en: 'Industrial Construction' } },
];

export const FAQS: FAQItem[] = [
  {
    id: 'panel-preventive-maintenance',
    number: '01',
    category: 'maintenance',
    categoryLabel: { id: 'Perawatan Panel', en: 'Panel Maintenance' },
    question: {
      id: 'Seberapa sering panel listrik industri (MDP, SDP, MCC) perlu dilakukan preventive maintenance?',
      en: 'How often should industrial electrical panels (MDP, SDP, MCC) undergo preventive maintenance?',
    },
    answer: {
      id: 'Untuk fasilitas pabrik dengan operasi kontinu, inspeksi visual dan thermography disarankan setiap 3–6 bulan, sedangkan preventive maintenance menyeluruh dilakukan minimal 1 kali setahun. Tim kami melakukan pengencangan ulang torsi terminal dan busbar, pembersihan debu/kelembaban kabinet, pengukuran arus beban antar fasa, uji tahanan isolasi (Megger), serta verifikasi fungsi kontaktor dan relay proteksi.',
      en: 'For continuous industrial plants, visual inspection and infrared thermography are recommended every 3–6 months, with full preventive maintenance at least annually. Our technicians perform terminal and busbar torque re-tightening, cabinet cleaning, phase load balancing checks, insulation resistance (Megger) testing, and contactor/relay verification.',
    },
    highlights: ['Thermography & Torsi Busbar', 'Megger Insulation Test', 'Cek Kontaktor & MCB/MCCB'],
  },
  {
    id: 'cap-bank-maintenance',
    number: '02',
    category: 'maintenance',
    categoryLabel: { id: 'Perawatan Panel', en: 'Panel Maintenance' },
    question: {
      id: 'Apa tanda Panel Capacitor Bank memerlukan perbaikan atau kalibrasi ulang?',
      en: 'What are the signs that a Capacitor Bank panel requires servicing or recalibration?',
    },
    answer: {
      id: 'Indikasi umum meliputi munculnya denda kVARh pada tagihan listrik, nilai cos phi di bawah 0,85 pada Power Factor Regulator, step kapasitor yang tidak mau masuk secara otomatis, atau fisik kapasitor yang menggembung akibat panas berlebih. Kami memeriksa kondisi fuse NH/MCB per step, kontaktor khusus kapasitor, serta parameter target faktor daya pada regulator.',
      en: 'Common signs include utility kVARh penalties, a power factor reading below 0.85 on the regulator, capacitor steps failing to switch automatically, or swollen capacitor cans caused by thermal stress. We inspect per-step fuses, capacitor-duty contactors, capacitance values, and regulator step parameters.',
    },
    highlights: ['Audit Power Factor Regulator', 'Uji Kapasitansi per Step', 'Cek Fuse & Kontaktor'],
  },
  {
    id: 'plc-troubleshooting-flow',
    number: '03',
    category: 'plc-troubleshooting',
    categoryLabel: { id: 'PLC & Inverter', en: 'PLC & Inverter' },
    question: {
      id: 'Bagaimana proses troubleshooting jika mesin berbasis PLC Siemens atau Omron tiba-tiba berhenti?',
      en: 'How do you troubleshoot an unexpected stoppage on Siemens or Omron PLC-controlled machinery?',
    },
    answer: {
      id: 'Proses diagnosa dimulai dari pembacaan status LED indikator CPU dan modul I/O, pengecekan alarm pada layar HMI, serta verifikasi sinyal input sensor maupun interlock darurat di lapangan. Setelah akar masalah ditemukan—baik gangguan sensor, relay output aus, maupun logika program—kami melakukan perbaikan, backup program PLC/HMI, serta uji siklus hingga mesin beroperasi normal kembali.',
      en: 'Diagnostics begin with CPU and I/O module status LEDs, HMI alarm logs, and field verification of sensor inputs and safety interlocks. Once the root cause—whether a faulty field sensor, worn output relay, or logic fault—is isolated, we resolve the issue, back up the PLC/HMI program, and run full cycle verification.',
    },
    highlights: ['Siemens S7-1200 & Omron CP1H', 'Diagnosa I/O & Sensor Lapangan', 'Backup Program & HMI'],
  },
  {
    id: 'inverter-vsd-faults',
    number: '04',
    category: 'plc-troubleshooting',
    categoryLabel: { id: 'PLC & Inverter', en: 'PLC & Inverter' },
    question: {
      id: 'Mengapa Inverter / VSD sering mengalami trip overcurrent atau overheat, dan bagaimana penanganannya?',
      en: 'Why do Inverter / VSD drives frequently trip on overcurrent or overheat, and how is it resolved?',
    },
    answer: {
      id: 'Trip overcurrent pada drive seperti Schneider Altivar atau Hitachi WJ-C1 umumnya dipicu oleh waktu akselerasi yang terlalu singkat, beban mekanis motor macet, atau gangguan isolasi kabel motor. Sementara trip overheat disebabkan oleh kipas pendingin panel yang tersumbat debu. Kami melakukan audit parameter VSD, uji gulungan motor, serta optimalisasi sistem ventilasi kabinet.',
      en: 'Overcurrent trips on drives such as Schneider Altivar or Hitachi WJ-C1 are commonly triggered by overly aggressive acceleration ramps, mechanical binding on the driven load, or motor cable insulation degradation. Overheat faults usually stem from clogged cabinet cooling fans. We audit VSD parameters, test motor windings, and restore forced cabinet ventilation.',
    },
    highlights: ['Schneider Altivar & Hitachi WJ-C1', 'Parameterisasi Ramp & Torsi', 'Inspeksi Cooling Fan & Kabel'],
  },
  {
    id: 'safety-loto-puil',
    number: '05',
    category: 'safety-standards',
    categoryLabel: { id: 'Standar K3 & Uji', en: 'Safety & Testing' },
    question: {
      id: 'Standar keselamatan kerja (K3) apa yang diterapkan saat instalasi dan energize panel di pabrik?',
      en: 'What workplace safety (K3/HSE) standards are enforced during factory panel installation and energization?',
    },
    answer: {
      id: 'Seluruh tim wajib mematuhi standar K3 kelistrikan meliputi penggunaan APD lengkap berinsulasi, penerapan prosedur isolasi energi Lockout-Tagout (LOTO) sebelum menyentuh sirkuit bertegangan, pengecekan tegangan nol (verify zero voltage), serta pelaporan potensi bahaya sebelum energize. Seluruh tata letak kabel dan proteksi merujuk pada ketentuan PUIL dan standar industri nasional.',
      en: 'All field personnel enforce strict electrical HSE protocols: insulated PPE compliance, Lockout-Tagout (LOTO) energy isolation prior to circuit work, zero-voltage verification, and pre-energize hazard audits. Panel layouts and circuit protections adhere to Indonesian national electrical regulations (PUIL).',
    },
    highlights: ['Prosedur Lockout-Tagout (LOTO)', 'APD Berinsulasi Lengkap', 'Kepatuhan Standar PUIL'],
  },
  {
    id: 'fat-documentation-guarantee',
    number: '06',
    category: 'safety-standards',
    categoryLabel: { id: 'Standar K3 & Uji', en: 'Safety & Testing' },
    question: {
      id: 'Apakah setiap perakitan panel dilengkapi pengujian FAT dan gambar diagram AutoCAD untuk maintenance?',
      en: 'Does every panel build include Factory Acceptance Testing (FAT) and AutoCAD schematics for maintenance?',
    },
    answer: {
      id: 'Ya. Sebelum dikirim dari workshop kami di Tangerang, setiap panel menjalani Factory Acceptance Test (FAT) mencakup uji kontinuitas, simulasi sekuensial kontrol, dan verifikasi trip proteksi. Setiap unit juga diserahkan bersama dokumentasi gambar kerja AutoCAD (Single Line Diagram & Wiring Schematic) serta penomoran kabel ber-ferule agar tim teknisi pabrik mudah melakukan perawatan jangka panjang.',
      en: 'Yes. Prior to dispatch from our Tangerang workshop, every panel undergoes Factory Acceptance Testing (FAT) covering continuity, control sequence simulation, and protection trip checks. Each delivery includes as-built AutoCAD Single-Line and Wiring Diagrams along with ferrule-numbered cabling for effortless long-term plant maintenance.',
    },
    highlights: ['Factory Acceptance Test (FAT)', 'As-Built AutoCAD Wiring Diagram', 'Penomoran Kabel Ferrule'],
  },
];

export const UI_COPY = {
  id: {
    nav: {
      about: 'Profil & K3',
      services: 'Layanan',
      portfolio: 'Portofolio',
      clients: 'Klien',
      cta: 'Ajukan Penawaran',
    },
    hero: {
      meta: 'CV. Karya Jaya Sinergi · Est. 2021 · Tangerang, Indonesia',
      headline: 'Rekayasa Panel Listrik & Otomasi Industri Presisi',
      subheadline:
        'Spesialis perancangan, fabrikasi panel distribusi (MDP, SDP, MCC, Capacitor Bank), serta integrasi sistem otomasi PLC & Inverter berstandar nasional untuk keandalan lini produksi Anda.',
      primaryCta: 'Ajukan Penawaran Teknis',
      secondaryCta: 'Unduh Company Profile (PDF)',
      captionTitle: 'Perakitan Panel Kontrol & Wiring Workshop',
      captionMeta: 'Standar Uji Fungsi & Commissioning · Tangerang',
    },
    kpis: [
      { value: '2021', label: 'Tahun Berdiri', detail: 'TDI No: 586/044-Ds. Brb/X/2026' },
      { value: '6 Sistem', label: 'Keahlian Utama', detail: 'MDP · SDP · MCC · Cap Bank · PLC · VSD' },
      { value: '15+ Proyek', label: 'Rekam Jejak Lintas Sektor', detail: 'Manufaktur, Hidran, Robotik & Pintu Air' },
      { value: '100% FAT', label: 'Uji Fungsi & K3', detail: 'Prosedur LOTO & Inspeksi Sebelum Energize' },
    ],
    about: {
      kicker: 'Profil Perusahaan & Tata Kelola K3',
      title: 'Mitra Rekayasa Kelistrikan yang Mengutamakan Kualitas dan Keselamatan',
      body: 'Berdiri sejak 2021 di Tangerang, CV. Karya Jaya Sinergi menghadirkan solusi menyeluruh mulai dari gambar teknis AutoCAD, fabrikasi panel di workshop, hingga instalasi dan commissioning di lokasi proyek. Setiap sistem dirancang agar aman, efisien, dan memenuhi standar kelistrikan nasional.',
      visionTitle: 'Visi Perusahaan',
      visionBody:
        'Menjadi perusahaan engineering dan electrical solutions yang terpercaya, unggul dalam kualitas, keselamatan, dan inovasi.',
      missionTitle: 'Misi Perusahaan',
      missions: [
        'Memberikan solusi kelistrikan yang aman, presisi, dan andal untuk sektor industri, komersial, maupun residensial.',
        'Menjaga kualitas pengerjaan, kerapian wiring, ketepatan waktu, dan kepuasan mitra kerja.',
        'Mengembangkan sumber daya manusia yang kompeten, bersertifikasi, dan profesional.',
      ],
      hseHeading: 'Standar Kesehatan & Keselamatan Kerja (K3)',
      hseNote: 'Keselamatan adalah prioritas utama di setiap tahapan workshop hingga energize lapangan.',
    },
    services: {
      kicker: 'Kapabilitas & Layanan Teknis',
      title: 'Enam Pilar Sistem Kelistrikan & Otomasi Industri',
      subtitle:
        'Setiap panel dirakit dengan komponen orisinal, pengkabelan berlabel sistematis, serta dokumentasi diagram lengkap.',
      inquireBtn: 'Konsultasikan Sistem Ini',
    },
    portfolio: {
      kicker: 'Pengalaman Proyek Nyata',
      title: 'Dokumentasi Fabrikasi Panel & Instalasi Lapangan',
      subtitle:
        'Telusuri hasil pekerjaan nyata kami dari gambar kerja AutoCAD hingga commissioning di pabrik dan infrastruktur.',
      filters: [
        { key: 'all', label: 'Semua Proyek' },
        { key: 'plc-control', label: 'Panel Kontrol & PLC' },
        { key: 'inverter-mcc', label: 'Inverter & MCC' },
        { key: 'pump-infra', label: 'Pompa & Infrastruktur' },
        { key: 'cad-design', label: 'Desain AutoCAD' },
      ] as const,
      inspectLabel: 'Lihat Spesifikasi',
      modalScope: 'Lingkup Pekerjaan',
      modalComponents: 'Komponen & Sistem Utama',
      modalCta: 'Diskusikan Proyek Serupa',
      modalClose: 'Tutup',
    },
    clients: {
      kicker: 'Kepercayaan Industri',
      title: 'Dipercaya oleh Perusahaan Manufaktur & Kontraktor Teknik',
      subtitle:
        'Terima kasih atas kepercayaan dan kolaborasi berkelanjutan bersama para mitra industri di seluruh Indonesia.',
    },
    faq: {
      kicker: 'Pertanyaan Umum & Standar Teknis',
      title: 'Panduan Perawatan Panel, Troubleshooting PLC & Keselamatan K3',
      subtitle:
        'Jawaban ringkas seputar prosedur pemeliharaan preventif, diagnosa sistem otomasi, dan kepatuhan keselamatan kerja yang diterapkan tim kami.',
      filters: [
        { key: 'all', label: 'Semua Topik' },
        { key: 'maintenance', label: 'Perawatan Panel' },
        { key: 'plc-troubleshooting', label: 'PLC & Inverter' },
        { key: 'safety-standards', label: 'Standar K3 & Uji' },
      ] as const,
      footerPrompt: 'Membutuhkan inspeksi lapangan atau jadwal maintenance berkala untuk pabrik Anda?',
      footerCta: 'Konsultasikan Jadwal Maintenance',
    },
    contact: {
      kicker: 'Konsultasi & Permintaan Penawaran',
      title: 'Diskusikan Kebutuhan Panel atau Instalasi Proyek Anda',
      subtitle:
        'Sampaikan spesifikasi daya, diagram single-line, atau rencana otomasi Anda. Tim teknis kami siap merespons cepat dengan estimasi komponen dan jadwal pengerjaan.',
      officeLabel: 'Alamat Workshop & Kantor',
      phoneLabel: 'Telepon / WhatsApp Resmi',
      emailLabel: 'Email Korespondensi',
      licenseLabel: 'Legalitas Usaha (TDI / Surat Izin)',
      formTitle: 'Formulir Permintaan Penawaran (RFQ)',
      nameLabel: 'Nama Lengkap / PIC',
      namePlaceholder: 'Contoh: Budi Santoso',
      companyLabel: 'Nama Perusahaan',
      companyPlaceholder: 'Contoh: PT. Manufaktur Nusantara',
      phoneInputLabel: 'Nomor WhatsApp / Telepon',
      phonePlaceholder: '+62 812-xxxx-xxxx',
      emailInputLabel: 'Alamat Email',
      emailPlaceholder: 'nama@perusahaan.co.id',
      systemLabel: 'Sistem yang Dibutuhkan',
      notesLabel: 'Spesifikasi Teknis / Kapasitas (kW / Ampere / Jumlah Motor)',
      notesPlaceholder: 'Jelaskan kebutuhan panel, kapasitas daya, merek komponen yang diinginkan, atau jadwal target...',
      submitBtn: 'Kirim Ringkasan via WhatsApp',
      emailBtn: 'Kirim via Email',
      validationError: 'Mohon lengkapi nama, perusahaan, serta nomor WhatsApp atau email yang valid.',
      successTitle: 'Ringkasan Permintaan Siap Dikirim',
      successBody:
        'Detail RFQ Anda telah disiapkan. Jika jendela WhatsApp tidak terbuka otomatis, gunakan tombol tautan langsung di bawah ini.',
      resetBtn: 'Buat Permintaan Baru',
    },
    footer: {
      rights: '© 2026 CV. Karya Jaya Sinergi — Engineering and Electrical Solutions.',
      legal: 'TDI No: 586/044-Ds. Brb/X/2026 · Tangerang, Banten',
    },
  },
  en: {
    nav: {
      about: 'Profile & HSE',
      services: 'Services',
      portfolio: 'Projects',
      clients: 'Clients',
      cta: 'Request Quote',
    },
    hero: {
      meta: 'CV. Karya Jaya Sinergi · Est. 2021 · Tangerang, Indonesia',
      headline: 'Precision Electrical Panels & Industrial Automation',
      subheadline:
        'Specialists in custom distribution switchgear (MDP, SDP, MCC, Capacitor Bank), PLC & VSD automation systems, and compliant industrial electrical installations.',
      primaryCta: 'Request Technical Quote',
      secondaryCta: 'Download Company Profile (PDF)',
      captionTitle: 'Control Panel Assembly & Workshop Wiring',
      captionMeta: 'Factory Acceptance Testing & Commissioning · Tangerang',
    },
    kpis: [
      { value: '2021', label: 'Established', detail: 'License TDI: 586/044-Ds. Brb/X/2026' },
      { value: '6 Systems', label: 'Core Disciplines', detail: 'MDP · SDP · MCC · Cap Bank · PLC · VSD' },
      { value: '15+ Projects', label: 'Cross-Sector Track Record', detail: 'Manufacturing, Hydrant, Robotics & Gates' },
      { value: '100% FAT', label: 'QA & HSE Standard', detail: 'LOTO Protocol & Pre-Energize Inspection' },
    ],
    about: {
      kicker: 'Company Profile & HSE Governance',
      title: 'An Electrical Engineering Partner Built on Quality and Safety',
      body: 'Founded in 2021 in Tangerang, CV. Karya Jaya Sinergi delivers end-to-end engineering from AutoCAD schematics and workshop panel assembly to on-site installation and commissioning—engineered to meet national safety and efficiency standards.',
      visionTitle: 'Our Vision',
      visionBody:
        'To become a trusted engineering and electrical solutions company distinguished by quality, workplace safety, and practical innovation.',
      missionTitle: 'Our Mission',
      missions: [
        'Deliver safe, reliable, and energy-efficient electrical systems for industrial, commercial, and residential clients.',
        'Uphold strict workmanship quality, neat wiring standards, on-time delivery, and client satisfaction.',
        'Continuously develop competent, safety-certified engineering personnel.',
      ],
      hseHeading: 'Health, Safety & Environment (K3) Standards',
      hseNote: 'Safety is our non-negotiable priority from workshop fabrication to final site energization.',
    },
    services: {
      kicker: 'Engineering Capabilities',
      title: 'Six Core Electrical & Automation Disciplines',
      subtitle:
        'Every panel is assembled using certified components, systematically labeled wiring harnesses, and complete schematic documentation.',
      inquireBtn: 'Consult on This System',
    },
    portfolio: {
      kicker: 'Verified Project Experience',
      title: 'Workshop Panel Fabrication & Field Installation Archive',
      subtitle:
        'Explore our real-world industrial deliveries spanning AutoCAD engineering drawings to live factory commissioning.',
      filters: [
        { key: 'all', label: 'All Projects' },
        { key: 'plc-control', label: 'Control & PLC' },
        { key: 'inverter-mcc', label: 'Inverter & MCC' },
        { key: 'pump-infra', label: 'Pumps & Facility' },
        { key: 'cad-design', label: 'AutoCAD Design' },
      ] as const,
      inspectLabel: 'Inspect Specs',
      modalScope: 'Scope of Work',
      modalComponents: 'Key Components & Architecture',
      modalCta: 'Discuss Similar Project',
      modalClose: 'Close',
    },
    clients: {
      kicker: 'Industry Trust',
      title: 'Trusted by Manufacturing Plants & Engineering Contractors',
      subtitle:
        'We value the long-term partnerships and engineering confidence placed in us by clients across Indonesia.',
    },
    faq: {
      kicker: 'Technical FAQ & Compliance',
      title: 'Panel Maintenance, PLC Diagnostics & Safety Standards',
      subtitle:
        'Clear answers on preventive switchgear maintenance, industrial automation troubleshooting, and the K3 safety protocols behind every delivery.',
      filters: [
        { key: 'all', label: 'All Topics' },
        { key: 'maintenance', label: 'Panel Maintenance' },
        { key: 'plc-troubleshooting', label: 'PLC & Inverter' },
        { key: 'safety-standards', label: 'Safety & Testing' },
      ] as const,
      footerPrompt: 'Need an on-site electrical audit or scheduled preventive maintenance for your plant?',
      footerCta: 'Schedule Maintenance Consultation',
    },
    contact: {
      kicker: 'Consultation & Quotation',
      title: 'Discuss Your Electrical Panel or Automation Requirements',
      subtitle:
        'Share your power capacity, single-line diagram, or automation scope. Our engineering team responds promptly with technical recommendations and scheduling.',
      officeLabel: 'Workshop & Office Address',
      phoneLabel: 'Direct Phone / WhatsApp',
      emailLabel: 'Official Email',
      licenseLabel: 'Industrial Business License (TDI)',
      formTitle: 'Technical Request for Quotation (RFQ)',
      nameLabel: 'Full Name / PIC',
      namePlaceholder: 'e.g. Budi Santoso',
      companyLabel: 'Company Name',
      companyPlaceholder: 'e.g. PT. Manufaktur Nusantara',
      phoneInputLabel: 'WhatsApp / Phone Number',
      phonePlaceholder: '+62 812-xxxx-xxxx',
      emailInputLabel: 'Email Address',
      emailPlaceholder: 'name@company.co.id',
      systemLabel: 'Required System',
      notesLabel: 'Technical Specifications (kW / Amps / Motor Count)',
      notesPlaceholder: 'Describe panel requirements, load capacity, preferred switchgear brand, or target timeline...',
      submitBtn: 'Send Summary via WhatsApp',
      emailBtn: 'Send via Email',
      validationError: 'Please provide your name, company, and a valid WhatsApp number or email address.',
      successTitle: 'Quotation Brief Prepared',
      successBody:
        'Your RFQ summary has been formatted. Use the direct launch button below to send via WhatsApp or Email.',
      resetBtn: 'Create Another Request',
    },
    footer: {
      rights: '© 2026 CV. Karya Jaya Sinergi — Engineering and Electrical Solutions.',
      legal: 'TDI No: 586/044-Ds. Brb/X/2026 · Tangerang, Banten',
    },
  },
};
