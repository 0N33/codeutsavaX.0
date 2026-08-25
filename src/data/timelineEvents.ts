export interface TimelineEvent {
  id: string;
  stageNumber: number;
  stageCode: string;
  title: string;
  lane: 'middle' | 'left' | 'right';
  laneIndex: number;
  date: string;
  dateShort: string;
  time: string;
  phase: string;
  phaseCode: string;
  category: 'Registration' | 'Selection' | 'Challenge' | 'Hackathon' | 'Finale';
  description: string;
  details: string[];
  xpIcon: 'notepad' | 'alert' | 'wizard' | 'cmd' | 'gear' | 'calendar' | 'cpu' | 'trophy';
  xpFileName: string;
  status: 'COMPLETED' | 'LIVE' | 'UPCOMING';
  accentColor: string;
  memoryAddress: string;
  badge: string;
  actionText: string;
}

// Pattern: middle -> left -> right -> middle -> left -> right
export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'stage-1',
    stageNumber: 1,
    stageCode: 'STAGE_01',
    title: 'Registration Opens!',
    lane: 'middle',
    laneIndex: 0,
    date: '15th September',
    dateShort: '15 SEP',
    time: '11:00 AM IST',
    phase: 'Phase 01: The Genesis',
    phaseCode: 'INIT_PORTAL',
    category: 'Registration',
    description:
      'Registrations begin for CodeUtsava X.0, the flagship event of The Turing Club of Programmers.',
    details: [
      'Registrations officially open',
      'Teams can begin submitting their entries',
      'Get ready for CodeUtsava X.0'
    ],
    xpIcon: 'notepad',
    xpFileName: 'REGISTRATION_OPEN.TXT',
    status: 'UPCOMING',
    accentColor: '#FFE279',
    memoryAddress: '0x00FF5FCF',
    badge: 'STAGE 01',
    actionText: 'Register_Now.exe'
  },

  {
    id: 'stage-2',
    stageNumber: 2,
    stageCode: 'STAGE_02',
    title: 'Shortlisting Begins!',
    lane: 'left',
    laneIndex: -1,
    date: '9th October',
    dateShort: '09 OCT',
    time: '11:00 AM IST',
    phase: 'Phase 01: The Genesis',
    phaseCode: 'EVAL_BATCH_1',
    category: 'Selection',
    description:
      'Team Shortlisting begins in batches for CodeUtsava X.0.',
    details: [
      'Team evaluation begins',
      'Shortlisting is conducted in batches',
      'Selected teams will be notified'
    ],
    xpIcon: 'gear',
    xpFileName: 'SHORTLIST_BATCH_01.LOG',
    status: 'UPCOMING',
    accentColor: '#FF5FCF',
    memoryAddress: '0x009929EA',
    badge: 'STAGE 02',
    actionText: 'Check_Status.bat'
  },

  {
    id: 'stage-3',
    stageNumber: 3,
    stageCode: 'STAGE_03',
    title: 'Registration Closes!',
    lane: 'right',
    laneIndex: 1,
    date: '1st November',
    dateShort: '01 NOV',
    time: '11:59 PM IST',
    phase: 'Phase 01: The Genesis',
    phaseCode: 'PORTAL_LOCK',
    category: 'Registration',
    description:
      'Registrations for CodeUtsava X.0 officially close.',
    details: [
      'Registration deadline: 11:59 PM',
      'No further registrations after the deadline',
      'Final registration data is locked'
    ],
    xpIcon: 'alert',
    xpFileName: 'GATEWAY_LOCKDOWN.SYS',
    status: 'UPCOMING',
    accentColor: '#9929EA',
    memoryAddress: '0x007A10E5',
    badge: 'STAGE 03',
    actionText: 'View_Metrics.vbs'
  },

  {
    id: 'stage-4',
    stageNumber: 4,
    stageCode: 'STAGE_04',
    title: 'Final Teams Announced',
    lane: 'middle',
    laneIndex: 0,
    date: '2nd November',
    dateShort: '02 NOV',
    time: '11:00 AM IST',
    phase: 'Phase 02: Selection & Briefing',
    phaseCode: 'ROSTER_CONFIRMED',
    category: 'Selection',
    description:
      'Final Shortlisted Teams for CodeUtsava X.0 are released.',
    details: [
      'Final shortlisted teams are announced',
      'Selected teams receive confirmation',
      'Teams prepare for the hackathon'
    ],
    xpIcon: 'wizard',
    xpFileName: 'FINAL_ROSTER_VX.DLL',
    status: 'UPCOMING',
    accentColor: '#FFE279',
    memoryAddress: '0x00A1F021',
    badge: 'STAGE 04',
    actionText: 'Download_Roster.cmd'
  },

  {
    id: 'stage-5',
    stageNumber: 5,
    stageCode: 'STAGE_05',
    title: 'Problem Statements Released',
    lane: 'left',
    laneIndex: -1,
    date: '2nd November',
    dateShort: '02 NOV',
    time: '11:00 AM IST',
    phase: 'Phase 02: Selection & Briefing',
    phaseCode: 'PS_DECRYPT',
    category: 'Challenge',
    description:
      'Problem Statements for CodeUtsava X.0 are released.',
    details: [
      'Problem Statements are officially revealed',
      'Teams can study and analyse the challenges',
      'Preparation for the hackathon begins'
    ],
    xpIcon: 'cmd',
    xpFileName: 'PROBLEM_STATEMENTS.EXE',
    status: 'UPCOMING',
    accentColor: '#FF5FCF',
    memoryAddress: '0x00C8D94B',
    badge: 'STAGE 05',
    actionText: 'Decrypt_PS.bin'
  },

  {
    id: 'stage-6',
    stageNumber: 6,
    stageCode: 'STAGE_06',
    title: 'Hackathon Begins!',
    lane: 'right',
    laneIndex: 1,
    date: '6th November',
    dateShort: '06 NOV',
    time: '08:00 AM IST',
    phase: 'Phase 03: The Arena',
    phaseCode: 'HACK_TIMER_START',
    category: 'Hackathon',
    description:
      'Commencement of CodeUtsava X.0!',
    details: [
      'The hackathon officially begins',
      'Teams start building their solutions',
      'CodeUtsava X.0 goes live'
    ],
    xpIcon: 'cpu',
    xpFileName: 'HACK_SPRINT_INIT.SYS',
    status: 'UPCOMING',
    accentColor: '#9929EA',
    memoryAddress: '0x0028HACK',
    badge: 'STAGE 06',
    actionText: 'Start_Hacking.exe'
  }
];