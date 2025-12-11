import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThreatCard } from '@/components/security/ThreatCard';
import { MetricCard } from '@/components/security/MetricCard';
import { ThreatLineChart } from '@/components/security/ThreatLineChart';
import { Badge } from '@/components/ui/badge';
import { generateThreat } from '@/lib/utils/threatGenerator';
import { generateTrafficData } from '@/lib/utils/dataGenerator';
import { toast } from 'sonner';
import type { Threat, TrafficData } from '@/types';
import {
  Activity,
  Zap,
  Radio,
  TrendingUp,
  Pause,
  Play,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';

export { default } from './LiveMonitoring';
