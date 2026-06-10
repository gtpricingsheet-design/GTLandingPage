import { useState, useEffect } from 'react';
import { FileText, Wrench, Package, Globe, Workflow, Check, ArrowRight } from 'lucide-react';
import Logo from './Logo';

interface Scenario {
  brief: string;
  scope: string;
  scopeSub: string;
  chips: string[];
  delivT: string;
  delivS: string;
  cta: string;
}

const scenarios: Scenario[] = [
  {
    brief: 'Sarah — website + booking flow',
    scope: 'Website + n8n automation',
    scopeSub: 'Custom site with booking flow',
    chips: ['chw', 'chn'],
    delivT: 'Website & workflow delivered',
    delivS: 'Figma mockup + n8n flow map',
    cta: 'View your mockup'
  },
  {
    brief: 'James — automate lead pipeline',
    scope: 'n8n workflow build',
    scopeSub: 'CRM sync + Slack notifications',
    chips: ['chn'],
    delivT: 'n8n workflow ready',
    delivS: '7-node flow built & tested',
    cta: 'Review your flow'
  },
  {
    brief: 'Anna — new agency website',
    scope: 'Website design & build',
    scopeSub: 'Webflow, mobile-first',
    chips: ['chw'],
    delivT: 'Website ready to launch',
    delivS: 'Mockup approved, build live',
    cta: 'View live site'
  }
];

export default function AnimatedConsole() {
  const [status, setStatus] = useState('Waiting for brief');
  const [isLive, setIsLive] = useState(false);
  
  // Card 1 state
  const [c1Lit, setC1Lit] = useState(true);
  const [c1IconState, setC1IconState] = useState<'on' | 'done' | 'off'>('on');
  const [c1Pill, setC1Pill] = useState<'New' | 'Received'>('New');
  const [c1Desc, setC1Desc] = useState(scenarios[0].brief);
  
  // Card 2 state
  const [c2Lit, setC2Lit] = useState(false);
  const [c2IconState, setC2IconState] = useState<'on' | 'done' | 'off'>('off');
  const [c2Title, setC2Title] = useState('Scoping your build');
  const [c2Desc, setC2Desc] = useState('Reviewing requirements...');
  const [c2PillVisible, setC2PillVisible] = useState(false);
  const [c2PillText, setC2PillText] = useState('Scoping');
  const [progressVisible, setProgressVisible] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  const [chipsVisible, setChipsVisible] = useState(false);
  const [activeChips, setActiveChips] = useState<string[]>([]);
  
  // Card 3 state
  const [c3Lit, setC3Lit] = useState(false);
  const [c3IconState, setC3IconState] = useState<'on' | 'done' | 'off'>('off');
  const [c3Title, setC3Title] = useState('Deliverable');
  const [c3Desc, setC3Desc] = useState('Pending scope');
  const [c3PillVisible, setC3PillVisible] = useState(false);
  const [c3PillText, setC3PillText] = useState('In progress');
  
  // CTA state
  const [ctaReady, setCtaReady] = useState(false);
  const [ctaLabel, setCtaLabel] = useState('Get a free mockup');

  useEffect(() => {
    let active = true;
    
    const runLoop = async () => {
      let currentIdx = 0;
      
      const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      
      while (active) {
        const s = scenarios[currentIdx % scenarios.length];
        
        // 1. Reset state
        if (!active) break;
        setStatus('Waiting for brief');
        setIsLive(false);
        setC1Desc(s.brief);
        setC1Pill('New');
        setC1Lit(true);
        setC1IconState('on');
        
        setC2Lit(false);
        setC2IconState('off');
        setC2Title('Scoping your build');
        setC2Desc('Reviewing requirements...');
        setC2PillVisible(false);
        setC2PillText('Scoping');
        setProgressVisible(false);
        setProgressWidth(0);
        setChipsVisible(false);
        setActiveChips([]);
        
        setC3Lit(false);
        setC3IconState('off');
        setC3Title('Deliverable');
        setC3Desc('Pending scope');
        setC3PillVisible(false);
        setC3PillText('In progress');
        
        setCtaReady(false);
        setCtaLabel('Get a free mockup');
        
        await delay(800);
        if (!active) break;
        
        // 2. Phase 1: Brief Received & Scoping
        await delay(900);
        if (!active) break;
        setStatus('Brief received');
        setIsLive(true);
        setC1Pill('Received');
        setC1IconState('done');
        
        await delay(500);
        if (!active) break;
        setC2Lit(true);
        setC2IconState('on');
        setC2Title(s.scope);
        setC2Desc(s.scopeSub);
        setC2PillText('Scoping');
        setC2PillVisible(true);
        setProgressVisible(true);
        
        await delay(80);
        if (!active) break;
        setProgressWidth(60);
        
        await delay(700);
        if (!active) break;
        setChipsVisible(true);
        setActiveChips(s.chips);
        setStatus('Scoping build');
        
        // 3. Phase 2: Progress to Build & Deliver
        await delay(1500);
        if (!active) break;
        setProgressWidth(100);
        
        await delay(400);
        if (!active) break;
        setC2IconState('done');
        setC2PillText('Scoped');
        setStatus('Build underway');
        
        await delay(600);
        if (!active) break;
        setC3Lit(true);
        setC3IconState('on');
        setC3Title(s.delivT);
        setC3Desc(s.delivS);
        setC3PillText('In progress');
        setC3PillVisible(true);
        
        await delay(1800);
        if (!active) break;
        setC3PillText('Ready');
        setC3IconState('done');
        setStatus('Delivered');
        setCtaReady(true);
        setCtaLabel(s.cta);
        
        await delay(3200);
        currentIdx++;
      }
    };
    
    runLoop();
    
    return () => {
      active = false;
    };
  }, []);

  const getCicoClass = (state: 'on' | 'done' | 'off') => {
    if (state === 'on') return 'bg-indigo-600 border-indigo-600 text-white';
    if (state === 'done') return 'bg-indigo-600/20 border-indigo-600/40 text-white';
    return 'bg-white/5 border-white/10 text-white/35';
  };
  
  const getIconColor = (state: 'on' | 'done' | 'off') => {
    return state !== 'off' ? 'text-white' : 'text-white/35';
  };

  return (
    <div className="bg-[#0F0F13] rounded-[24px] p-7 max-w-[460px] w-full mx-auto font-sans text-left shadow-2xl select-none">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#5B4EDD]/15 border border-[#5B4EDD]/30 rounded flex items-center justify-center">
            <Logo size={12} />
          </div>
          <span className="text-[12px] font-medium text-white tracking-[0.04em]">Jovex Studio</span>
        </div>
        
        <div className={`flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[11px] text-white/50 transition-all duration-300 ${isLive ? 'text-emerald-400 border-emerald-400/25 bg-emerald-400/10' : ''}`}>
          <span className={`w-1.5 h-1.5 rounded-full bg-white/30 transition-colors duration-300 ${isLive ? 'bg-emerald-400 animate-pulse' : ''}`} />
          <span>{status}</span>
        </div>
      </div>

      {/* Card 1: Project Brief */}
      <div className={`bg-white/[0.05] border border-white/[0.09] rounded-2xl p-4 mb-2 transition-all duration-500 ${c1Lit ? 'bg-white/[0.08] border-indigo-500/40 opacity-100' : 'opacity-[0.28]'}`}>
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${getCicoClass(c1IconState)}`}>
            <FileText size={16} className={getIconColor(c1IconState)} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white/90 mb-0.5">New project brief</p>
            <p className={`text-[11px] truncate transition-colors duration-300 ${c1Lit ? 'text-white/60' : 'text-white/45'}`}>{c1Desc}</p>
          </div>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full tracking-wider whitespace-nowrap ml-auto flex-shrink-0 transition-all duration-300 ${c1Pill === 'New' ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-600/30' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
            {c1Pill}
          </span>
        </div>
      </div>

      {/* Card 2: Scoping */}
      <div className={`bg-white/[0.05] border border-white/[0.09] rounded-2xl p-4 mb-2 transition-all duration-500 ${c2Lit ? 'bg-white/[0.08] border-indigo-500/40 opacity-100' : 'opacity-[0.28]'}`}>
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${getCicoClass(c2IconState)}`}>
            <Wrench size={16} className={getIconColor(c2IconState)} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white/90 mb-0.5">{c2Title}</p>
            <p className={`text-[11px] truncate transition-colors duration-300 ${c2Lit ? 'text-white/60' : 'text-white/45'}`}>{c2Desc}</p>
          </div>
          {c2PillVisible && (
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full tracking-wider whitespace-nowrap ml-auto flex-shrink-0 transition-all duration-300 ${c2PillText === 'Scoping' ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
              {c2PillText}
            </span>
          )}
        </div>
        
        {progressVisible && (
          <div className="h-0.5 bg-white/10 rounded-full mt-2.5 overflow-hidden">
            <div 
              className="h-full bg-indigo-500 rounded-full transition-all duration-[1500ms] ease-out"
              style={{ width: `${progressWidth}%` }}
            />
          </div>
        )}

        {progressVisible && (
          <div className={`flex gap-1.5 mt-2.5 flex-wrap transition-all duration-300 ${chipsVisible ? 'opacity-100' : 'opacity-0'}`}>
            <span id="chw" className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border flex items-center gap-1 transition-all duration-300 ${activeChips.includes('chw') ? 'bg-indigo-600/20 border-indigo-600/40 text-indigo-300' : 'bg-white/5 border-white/10 text-white/30'}`}>
              <Globe size={11} /> Website
            </span>
            <span id="chn" className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border flex items-center gap-1 transition-all duration-300 ${activeChips.includes('chn') ? 'bg-indigo-600/20 border-indigo-600/40 text-indigo-300' : 'bg-white/5 border-white/10 text-white/30'}`}>
              <Workflow size={11} /> n8n flow
            </span>
            <span id="chb" className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border flex items-center gap-1 transition-all duration-300 ${activeChips.includes('chb') ? 'bg-indigo-600/20 border-indigo-600/40 text-indigo-300' : 'bg-white/5 border-white/10 text-white/30'}`}>
              <Check size={11} /> Both
            </span>
          </div>
        )}
      </div>

      {/* Card 3: Deliverable */}
      <div className={`bg-white/[0.05] border border-white/[0.09] rounded-2xl p-4 mb-2 transition-all duration-500 ${c3Lit ? 'bg-white/[0.08] border-indigo-500/40 opacity-100' : 'opacity-[0.28]'}`}>
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${getCicoClass(c3IconState)}`}>
            <Package size={16} className={getIconColor(c3IconState)} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white/90 mb-0.5">{c3Title}</p>
            <p className={`text-[11px] truncate transition-colors duration-300 ${c3Lit ? 'text-white/60' : 'text-white/45'}`}>{c3Desc}</p>
          </div>
          {c3PillVisible && (
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full tracking-wider whitespace-nowrap ml-auto flex-shrink-0 transition-all duration-300 ${c3PillText === 'In progress' ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
              {c3PillText}
            </span>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className={`w-full bg-indigo-600 text-white border-none rounded-xl py-3.5 px-4 text-[13px] font-medium text-center mt-2.5 tracking-wider transition-all duration-500 flex items-center justify-center gap-2 select-none ${ctaReady ? 'bg-indigo-600 opacity-100 shadow-xl scale-[1.01]' : 'opacity-20 pointer-events-none'}`}>
        <span>{ctaLabel}</span>
        <ArrowRight size={14} className={`transition-transform duration-300 ${ctaReady ? 'translate-x-0.5' : ''}`} />
      </div>
    </div>
  );
}
