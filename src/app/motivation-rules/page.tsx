"use client";

import {
  BarChart3,
  Building2,
  CalendarClock,
  CalendarRange,
  ClipboardList,
  ClipboardPen,
  LayoutDashboard,
  LayoutList,
  ScrollText,
  ShieldCheck,
  SquarePen,
  UserRoundCog,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { AppShell } from "@/components/dashboard/app-shell";
import { useAuthStore } from "@/store/auth-store";

const borderCell =
  "border border-white/15 bg-[#252525] px-3 py-2 align-top leading-[1.35] font-semibold text-slate-100";
const blueHead =
  "border border-sky-400/30 bg-sky-500/22 px-3 py-2 text-center font-extrabold text-sky-100";
const beigeHead =
  "border border-white/15 bg-[#303030] px-3 py-2 text-center font-extrabold text-slate-200";

const rtkRows = [
  ["0100-498070", "WINK. Подписка Wink + more.tv 3 месяца", "799"],
  ["0100-498071", "WINK. Подписка Wink + more.tv 6 месяцев", "1490"],
  ["0100-498072", "WINK. Подписка Wink + more.tv 12 месяцев", "2890"],
  ["0100-497527", "WINK. Подписка Wink + more.tv 6 месяцев ПРОМО", "894"],
  ["0100-497528", "WINK. Подписка Wink + more.tv 12 месяцев ПРОМО", "1734"],
  ["0100-496778", "WINK. Подписка Трансформер (3 месяца)", "1199"],
  ["0100-498068", "WINK. Подписка Трансформер (6 месяцев)", "2399"],
  ["0100-498069", "WINK. Подписка Трансформер (12 месяцев)", "4790"],
  ["0100-498080", "WINK. Подписка Трансформер. (6 месяцев) ПРОМО", "1799"],
  ["0100-496780", "WINK. Подписка «Wink+viju» (3 месяца)", "999"],
  ["0100-498075", "WINK. Подписка «Wink+viju» (6 месяцев)", "1790"],
  ["0100-498076", "WINK. Подписка «Wink+viju» (12 месяцев)", "2990"],
  ["0100-498077", "WINK. Подписка «Wink 5в1» (3 месяца)", "1390"],
  ["0100-498078", "WINK. Подписка «Wink 5в1» (6 месяцев)", "2590"],
  ["0100-498079", "WINK. Подписка «Wink 5в1» (12 месяцев)", "4990"],
  ["0100-499465", "Ростелеком. Лицей, 3 месяца", "525"],
  ["0100-496775", "Ростелеком. Лицей, 6 месяцев", "1000"],
  ["0100-496776", "Ростелеком. Лицей, 12 месяцев", "1800"],
  ["0100-499389", "Пакет «Первый детский»", "810"],
  ["0100-448155", "Бандл «Простая выгода»", "450"],
  [
    "0100-492806",
    "Бандл «PRO32 Ultimate Security лицензия на 1г/3 устр + Абонемент Wink на 7 мес.»",
    "1200",
  ],
];

export default function MotivationRulesPage() {
  const router = useRouter();
  const { session } = useAuthStore();

  useEffect(() => {
    if (!session) {
      router.replace("/");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }

  const nav =
    session.role === "ADMIN"
      ? [
          {
            id: "summary",
            label: "Сводка",
            icon: <ShieldCheck className="h-4 w-4" />,
            onClick: () => router.push("/admin"),
          },
          {
            id: "create",
            label: "Создать точку",
            icon: <LayoutList className="h-4 w-4" />,
            onClick: () => router.push("/admin"),
          },
          {
            id: "points",
            label: "Список точек",
            icon: <Building2 className="h-4 w-4" />,
            onClick: () => router.push("/admin"),
          },
          {
            id: "users",
            label: "Пользователи",
            icon: <UserRoundCog className="h-4 w-4" />,
            onClick: () => router.push("/admin"),
          },
          {
            id: "motivation",
            label: "Мотивация",
            icon: <ScrollText className="h-4 w-4" />,
            onClick: () => router.push("/motivation-rules"),
            active: true,
          },
        ]
      : session.role === "DM"
        ? [
            {
              id: "schedule",
              label: "График",
              icon: <CalendarClock className="h-4 w-4" />,
              onClick: () => router.push("/dm"),
            },
            {
              id: "point-plan",
              label: "План точки",
              icon: <ClipboardPen className="h-4 w-4" />,
              onClick: () => router.push("/dm"),
            },
            {
              id: "employee-plan",
              label: "Личные планы",
              icon: <SquarePen className="h-4 w-4" />,
              onClick: () => router.push("/dm"),
            },
            {
              id: "team",
              label: "Команда",
              icon: <Users className="h-4 w-4" />,
              onClick: () => router.push("/dm"),
            },
            {
              id: "motivation",
              label: "Мотивация",
              icon: <ScrollText className="h-4 w-4" />,
              onClick: () => router.push("/motivation-rules"),
              active: true,
            },
          ]
        : [
            {
              id: "overview",
              label: "Сводка",
              icon: <LayoutDashboard className="h-4 w-4" />,
              onClick: () => router.push("/employee"),
            },
            {
              id: "schedule",
              label: "График",
              icon: <CalendarRange className="h-4 w-4" />,
              onClick: () => router.push("/employee"),
            },
            {
              id: "point-plan",
              label: "План точки",
              icon: <ClipboardList className="h-4 w-4" />,
              onClick: () => router.push("/employee"),
            },
            {
              id: "stats",
              label: "Статистика",
              icon: <BarChart3 className="h-4 w-4" />,
              onClick: () => router.push("/employee"),
            },
            {
              id: "motivation",
              label: "Мотивация",
              icon: <ScrollText className="h-4 w-4" />,
              onClick: () => router.push("/motivation-rules"),
              active: true,
            },
          ];

  return (
    <AppShell
      title={
        session.role === "ADMIN"
          ? "Админка"
          : session.role === "DM"
            ? "Кабинет ДМ"
            : "Личный кабинет"
      }
      subtitle="Правила мотивации"
      pointLabel={
        session.pointAddress
          ? `${session.pointName} • ${session.pointAddress}`
          : session.pointName || undefined
      }
      nav={nav}
    >
      <div className="space-y-6 [font-family:Arial,_sans-serif] text-[13px] md:text-[15px]">
        <section className="space-y-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/75 p-3 md:p-4">
          <table className="w-full border-collapse overflow-hidden rounded-2xl border border-white/20 shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
            <thead>
              <tr>
                <th className={`${beigeHead} w-[24%]`}>
                  Наименование показателя
                </th>
                <th className={beigeHead} colSpan={3}>
                  % прохождения анкет за отчетный период с 25 по 24 число
                </th>
              </tr>
            </thead>
          </table>

          <div className="h-4 w-[84%] bg-[#2a313a] [clip-path:polygon(0_0,100%_0,96%_100%,0_100%)]" />
          <div className="h-4 w-full bg-[#242b33]" />

          <table className="w-full border-collapse overflow-hidden rounded-2xl border border-white/20 shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
            <tbody>
              <tr>
                <td className={`${beigeHead} w-[23%]`} />
                <td className={`${beigeHead} w-[25%]`}>
                  Анкета{" "}
                  <span className="underline decoration-red-600">VMR</span>, ТТ
                  &lt;77%
                </td>
                <td className={`${beigeHead} w-[25%]`}>
                  Анкета{" "}
                  <span className="underline decoration-red-600">VMR</span>{" "}
                  &lt;77%,
                  <br />
                  <span className="underline decoration-red-600">ПТ</span>{" "}
                  &gt;77%
                </td>
                <td className={`${beigeHead} w-[27%]`}>
                  Анкета VMR
                  <br />
                  =100%, &gt;101%
                </td>
              </tr>
              <tr>
                <td className={`${beigeHead} text-center`}>
                  <span className="underline decoration-red-600">VMR</span>
                </td>
                <td className={borderCell}>
                  При получении анкеты меньше 77% применяется корректировка 1000
                  руб. за получение второй анкеты, меньше 77% применяется
                  корректировка 2000 руб. при получений третьей анкеты, меньше
                  77% применяется корректировка 3000 руб. Все последующие
                  отрицательные анкеты, так же применяется корректировка 3 000
                  руб. (На{" "}
                  <span className="underline decoration-red-600">ДМ</span> так
                  же распространяется)
                </td>
                <td className={`${borderCell} text-center`}>
                  При получении каждой отрицательной анкеты на 1-го сотрудника
                  &lt;77%, применяется корректировка 1000 руб. на
                  <span className="underline decoration-red-600"> ДМ</span>
                </td>
                <td className={`${borderCell} text-center`}>
                  + 1000 рублей. (Получен дополнительный балл за прохождение
                  VMR) Анкета VMR &gt;101%
                  <br />
                  +500 рублей Анкета VMR =100%
                  <br />
                  <span className="underline decoration-red-600">
                    Если VMR по ТТ &gt;=77% штрафы отменяются
                  </span>
                </td>
              </tr>
              <tr>
                <td className={`${beigeHead} text-center`}>HP</td>
                <td className={`${borderCell} text-center`}>
                  Если, по{" "}
                  <span className="underline decoration-red-600">ТТ</span>{" "}
                  HR&gt;=3.7%
                  <br />
                  <span className="underline decoration-red-600">ДБ</span> не
                  применяется
                </td>
                <td className={`${borderCell} text-center`}>
                  Если HR &lt;3,7% по{" "}
                  <span className="underline decoration-red-600">ТТ</span> и
                  жалоба не откалибрована -1000руб
                </td>
                <td className={borderCell} />
              </tr>
              <tr>
                <td className={`${beigeHead} text-center`} rowSpan={3}>
                  <span className="underline decoration-red-600">CuVo</span>
                </td>
                <td className={`${beigeHead} text-center`} colSpan={3}>
                  Количество оценок «1»или 2» за процедуры работ в WD
                </td>
              </tr>
              <tr>
                <td className={`${borderCell} text-center`} colSpan={2}>
                  На 200 обращений допустимо по 1 низкой оценки
                </td>
                <td className={`${borderCell} text-center`}>
                  Свыше 2 низких оценок (каждая{" "}
                  <span className="underline decoration-red-600">ТТ</span>)
                </td>
              </tr>
              <tr>
                <td className={`${borderCell} text-center`} colSpan={2}>
                  0 руб.
                </td>
                <td className={`${borderCell} text-center`}>
                  - 100рублей за каждую «1» + переаттестация.
                </td>
              </tr>
              <tr>
                <td className={`${beigeHead} text-center`} rowSpan={3}>
                  <span className="underline decoration-red-600">KPI LMS</span>
                </td>
                <td className={`${beigeHead} text-center`} colSpan={3}>
                  Курсы KPI LMS
                </td>
              </tr>
              <tr>
                <td className={`${borderCell} text-center`} colSpan={3}>
                  Менее 85%/ позже установленного срока – 1000 рублей.
                </td>
              </tr>
              <tr>
                <td className={`${borderCell} text-center`} colSpan={3}>
                  Прохождение курса и/или теста на учебном портале с 1
                  <br />
                  по 10 число отчетного месяца или в течении 7-ми дней после
                  назначения (в случае, когда назначение приходит после 10
                  <br />
                  числа текущего месяца)
                </td>
              </tr>
              <tr>
                <td className={`${beigeHead} text-center`}>
                  <span className="underline decoration-red-600">SQI</span>
                  <br />
                  (ФО и автоматизация{" "}
                  <span className="underline decoration-red-600">ТТ</span>)
                </td>
                <td className={`${borderCell} text-center`} colSpan={3}>
                  В случае не прохождения{" "}
                  <span className="underline decoration-red-600">
                    фотоотчета
                  </span>
                  , назначенного компанией T2, предусмотрена корректировка
                  директору магазина в управленческом блоке.
                  <br />В случае, если{" "}
                  <span className="underline decoration-red-600">
                    фотоотчет
                  </span>{" "}
                  не был отправлен, оформлен в приложении 4Shoppers сотрудниками
                  <span className="underline decoration-red-600"> ТТ</span> (в
                  момент отсутствия
                  <span className="underline decoration-red-600"> ДМ</span> по
                  уважительной причине, с предупреждением{" "}
                  <span className="underline decoration-red-600">РД</span>)
                  применяется корректировка сотруднику, назначенным директором
                  магазина – 1000 руб
                </td>
              </tr>
            </tbody>
          </table>

          <div className="h-10 w-[89%] bg-[#2a313a] px-3 py-2 text-left font-extrabold text-slate-100 [clip-path:polygon(0_0,100%_0,94%_100%,0_100%)]">
            Если, торговая Точка по итогу месяца, проходит targe 77% то все
            корректировки по VMR{" "}
            <span className="underline decoration-red-600">ОТМЕНЯЮТСЯ</span>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/75 p-3 md:p-4">
          <table className="w-full border-collapse overflow-hidden rounded-2xl border border-white/20 shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
            <thead>
              <tr>
                <th className={blueHead}>РАЗМЕР ВЫПЛАТЫ</th>
                <th className={blueHead}>УСЛОВИЯ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={borderCell}>3 % базовая ставка</td>
                <td className={borderCell}>
                  Плановое значение по страхованию не выполнено
                </td>
              </tr>
              <tr>
                <td className={borderCell}>10% за страховки</td>
                <td className={borderCell}>
                  При выполнение условий корректировок.
                </td>
              </tr>
              <tr>
                <td className={borderCell}>20 % за страховки</td>
                <td className={borderCell}>
                  Плановое значение по страхованию выполнено на &gt;=81% , доп
                  условия от менеджера операторского направления.
                </td>
              </tr>
              <tr>
                <td className={borderCell}>30 % за страховки</td>
                <td className={borderCell}>
                  Плановое значение по страхованию выполнено на &gt;=105%, доп
                  условия от менеджера операторского направления.
                </td>
              </tr>
            </tbody>
          </table>

          <div className="space-y-1 px-6 leading-[1.3] font-extrabold">
            <p>
              * Доп. Условия от менеджера операторского направления
              предоставляется приказом.
            </p>
            <p>
              * Для вознаграждения учитывается любое
              <span className="underline decoration-red-600"> ДСО</span>.
            </p>
            <p>
              *Аннулированные страховые полисы не учитываются в факт выполнения
              плана, не подлежат оплате бонуса за продажу.
            </p>
            <p>
              *Страхование Combo, с не активированными сим картами и сим картами
              с внесенными данными не в день активации, не учитывается в факт
              выполнения плана, не подлежат оплате бонуса за продажу.
            </p>
            <p>
              -на <span className="underline decoration-red-600">ТТ</span>, у
              которых нет плана по страхованию, расчёт производится факт за план
            </p>
          </div>

          <h2 className="px-4 text-xl font-extrabold md:text-2xl">
            9.Расчет бонуса за Домашний Интернет от Tele2 и
            <span className="underline decoration-red-600"> РТК</span>
          </h2>

          <table className="w-full border-collapse overflow-hidden rounded-2xl border border-white/20 shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
            <thead>
              <tr>
                <th className={blueHead}>РАЗМЕР ВЫПЛАТЫ</th>
                <th className={blueHead}>УСЛОВИЯ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={borderCell}>1000 руб. за 1 подключение</td>
                <td className={borderCell}>
                  При выполнении плана ШПД РТК &gt;=100%
                </td>
              </tr>
              <tr>
                <td className={borderCell}>300 Руб. за 1 подключение РТК</td>
                <td className={borderCell}>При невыполнении плана ШПД РТК</td>
              </tr>
              <tr>
                <td className={borderCell}>&nbsp;</td>
                <td className={borderCell}>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="space-y-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/75 p-3 md:p-4">
          <div className="space-y-1 px-4 text-[16px] leading-[1.25] font-extrabold md:text-[20px]">
            <p>200руб – план не закрыт, 500руб – план закрыт</p>
            <p>
              В АО <span className="underline decoration-red-600">РТК</span>{" "}
              входят: Камеры
              <span className="underline decoration-red-600"> РТК</span>,
              Колонки, Приставки и т.д
            </p>
          </div>

          <h2 className="px-4 text-xl font-extrabold md:text-2xl">
            Расчет бонуса за подписки{" "}
            <span className="underline decoration-red-600">РТК</span>:
          </h2>

          <table className="w-full border-collapse overflow-hidden rounded-2xl border border-white/20 shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
            <thead>
              <tr>
                <th className={blueHead}>РАЗМЕР ВЫПЛАТЫ</th>
                <th className={blueHead}>УСЛОВИЯ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={borderCell}>0 %</td>
                <td className={borderCell}>
                  Плановое значение по Подписки РТК выполнено &lt;=80%
                </td>
              </tr>
              <tr>
                <td className={borderCell}>10 %</td>
                <td className={borderCell}>
                  Плановое значение по Подписки РТК от 80 % &gt;=100%
                </td>
              </tr>
            </tbody>
          </table>

          <div className="w-full overflow-x-auto">
            <table className="mt-4 min-w-[620px] border-collapse overflow-hidden rounded-xl border border-emerald-700/60 text-[11px] md:text-[13px]">
              <thead>
                <tr>
                  <th className="border border-emerald-700/60 bg-emerald-700/35 px-2 py-1 font-bold text-emerald-100">
                    Номенклатура
                  </th>
                  <th className="border border-emerald-700/60 bg-emerald-700/35 px-2 py-1 font-bold text-emerald-100">
                    Наименование
                  </th>
                  <th className="border border-emerald-700/60 bg-emerald-700/35 px-2 py-1 font-bold text-emerald-100">
                    Условия зачета в план, руб
                  </th>
                </tr>
              </thead>
              <tbody>
                {rtkRows.map((row) => (
                  <tr key={row[0]}>
                    <td className="border border-emerald-700/60 bg-[#1f2b24] px-2 py-1 text-emerald-50">
                      {row[0]}
                    </td>
                    <td className="border border-emerald-700/60 bg-[#1f2b24] px-2 py-1 text-emerald-50">
                      {row[1]}
                    </td>
                    <td className="border border-emerald-700/60 bg-[#1f2b24] px-2 py-1 text-right text-emerald-50">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="px-4 text-xl font-extrabold md:text-2xl">
            7.Расчет бонуса за Страхование
          </h2>

          <div className="h-12 w-[90%] bg-[#2a313a] [clip-path:polygon(0_0,100%_0,95%_100%,0_100%)]" />
        </section>

        <section className="space-y-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/75 p-3 md:p-4">
          <table className="w-full border-collapse overflow-hidden rounded-2xl border border-white/20 shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
            <tbody>
              <tr>
                <th className={blueHead}>Аксессуары</th>
                <th className={blueHead}>Размер бонуса</th>
              </tr>
              <tr>
                <td
                  className={`${borderCell} text-center text-[22px] font-extrabold md:text-[48px]`}
                >
                  8%
                </td>
                <td className={`${borderCell} text-center`}>Базовая ставка</td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} text-center text-[22px] font-extrabold md:text-[48px]`}
                >
                  16%
                </td>
                <td className={`${borderCell} text-center`}>
                  Аксессуары &gt;=100%
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} text-center text-[22px] font-extrabold md:text-[48px]`}
                >
                  20%
                </td>
                <td className={`${borderCell} text-center`}>
                  Аксессуары &gt;=120%
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} text-center text-[22px] font-extrabold md:text-[48px]`}
                >
                  20%
                </td>
                <td className={`${borderCell} text-center`}>
                  Плёнки MOCOLL &gt;= 100% (
                  <span className="underline decoration-red-600">шт.</span>)
                  <br />
                  Аксессуары &gt;= 100%
                </td>
              </tr>
              <tr>
                <th className={blueHead}>НАСТРОЙКИ</th>
                <th className={blueHead}>Размер бонуса</th>
              </tr>
              <tr>
                <td
                  className={`${borderCell} text-center text-[22px] font-extrabold md:text-[48px]`}
                >
                  10%
                </td>
                <td className={`${borderCell} text-center`}>
                  Базовая ставка за настройки
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} text-center text-[22px] font-extrabold md:text-[48px]`}
                >
                  20%
                </td>
                <td className={`${borderCell} text-center`}>
                  Настройки &gt;=100%
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} text-center text-[22px] font-extrabold md:text-[48px]`}
                >
                  30%
                </td>
                <td className={`${borderCell} text-center`}>
                  Настройки &gt;=100%
                  <br />
                  АО в руб. &gt;=100%
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} text-center text-[22px] font-extrabold md:text-[48px]`}
                >
                  40%
                </td>
                <td className={`${borderCell} text-center`}>
                  Настройки &gt;=100%
                  <br />
                  АО РТК в руб. &gt;=100%
                  <br />
                  Подписки РТК в руб. &gt;=100%
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="space-y-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/75 p-3 md:p-4">
          <div className="space-y-1 px-6 leading-[1.3] font-extrabold">
            <p>
              *Тариф классический,
              <span className="underline decoration-red-600">
                {" "}
                интернет
              </span>{" "}
              для вещей,
              <span className="underline decoration-red-600">
                {" "}
                интернет
              </span>{" "}
              для устройств оплачивается фиксировано -10 рублей за
              <span className="underline decoration-red-600"> шт</span>.
            </p>
            <p>
              * Оплата за сим карты производится только в том случае, если по
              сим проведена продажа в 1С, сим активирована и зарегистрирована в
              текущем месяце. Факт GI берётся из расчета после проверки
              <span className="underline decoration-red-600"> СМЭФ</span>
            </p>
            <p>
              * Сим карты по акции золотой номер оплачиваются от полной
              стоимости комплекта.
            </p>
          </div>

          <div className="space-y-1 px-6 font-extrabold">
            <p className="inline bg-[#b6a24f] px-1 text-[#1e1a08]">
              -Вводится дополнительный коэффициенты к сумме за GI:
            </p>
            <p className="inline bg-[#b6a24f] px-1 text-[#1e1a08]">
              при условии ошибки в фокусных процедурах &gt;5% – сумма за GI *0,9
            </p>
            <br />
            <p className="inline bg-[#b6a24f] px-1 text-[#1e1a08]">
              при условии выполнения доля MIX &gt;=85% *1
            </p>
            <br />
            <p className="inline bg-[#b6a24f] px-1 text-[#1e1a08]">
              при выполнение 2 блоков условия фокусные процедуры и MIX = 1,1
            </p>
          </div>

          <table className="w-full border-collapse overflow-hidden rounded-2xl border border-white/20 shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
            <thead>
              <tr>
                <th className={blueHead}>MIX</th>
                <th className={blueHead}>УСЛОВИЯ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`${borderCell} text-center`}>MIX &gt;=85%</td>
                <td className={`${borderCell} text-center`}>
                  Выполнение MIX &gt;=85% считается по
                  <span className="underline decoration-red-600"> ТТ</span>
                </td>
              </tr>
              <tr>
                <td className={borderCell}>&nbsp;</td>
                <td className={borderCell}>&nbsp;</td>
              </tr>
            </tbody>
          </table>

          <table className="w-full max-w-[980px] border-collapse overflow-hidden rounded-2xl border border-white/20 shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
            <tbody>
              <tr>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[16px] font-extrabold text-[#1e1a08] md:text-[22px]`}
                >
                  6.Базовая ставка Коммерческий блок
                </td>
                <td className={`${borderCell} w-[22%]`} />
              </tr>
              <tr>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[#1e1a08]`}
                >
                  СМАРТФОНЫ:
                </td>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[15px] font-extrabold text-[#1e1a08] md:text-[20px]`}
                >
                  200 руб/шт
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[#1e1a08]`}
                >
                  BQ, ZTE, OPPO, TCL, КНОПОЧНЫЕ ТЕЛЕФОНЫ: все
                </td>
                <td
                  className={`${borderCell} bg-[#c5def1] text-center text-[15px] font-extrabold text-black md:text-[20px]`}
                >
                  300 руб/шт
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[#1e1a08]`}
                >
                  Apple
                </td>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[15px] font-extrabold text-[#1e1a08] md:text-[20px]`}
                >
                  1%
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[#1e1a08]`}
                >
                  ПЛАНШЕТЫ: BQ,
                  <br />
                  НОУТБУКИ: все
                  <br />
                  БЫТОВАЯ ТЕХНИКА: вся,
                  <br />
                  ОРИГИНАЛЬНЫЕ АКСЕССУАРЫ: Apple
                </td>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[15px] font-extrabold text-[#1e1a08] md:text-[20px]`}
                >
                  2%
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[#1e1a08]`}
                >
                  Смарт-часы (кроме Apple, Huawei, Samsung), Wi- Fi роутеры
                  (все), модемы (все), ТВ приставки, фитнес-браслеты (все)
                </td>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[15px] font-extrabold text-[#1e1a08] md:text-[20px]`}
                >
                  4%
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[#1e1a08]`}
                >
                  Уцененный товар: смартфоны/Уцененный товар: планшеты из
                  категории «Дисконт»
                </td>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[15px] font-extrabold text-[#1e1a08] md:text-[20px]`}
                >
                  5%
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[#1e1a08]`}
                >
                  Уцененный товар – телефоны (Ремонтные телефоны, после
                  восстановления) (НЕ новые)
                </td>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-center text-[15px] font-extrabold text-[#1e1a08] md:text-[20px]`}
                >
                  10%
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="space-y-4 rounded-2xl border border-white/10 bg-[#1a1a1a]/75 p-3 md:p-4">
          <div className="px-2 text-[15px] leading-[1.35] font-extrabold md:px-0 md:text-[22px]">
            *В случае, если у сотрудника в должности ПК или
            <span className="underline decoration-red-600"> ДМ</span> за месяц
            нет ни одного выданного Кредита –Рассрочки , при этом отработано
            более 90 часов, вся личная премия умножается на 0,9. (Для
            <span className="underline decoration-red-600"> ТТ</span> с планом
            по Кредитам)
          </div>

          <h2 className="px-2 text-[15px] font-extrabold md:text-[24px]">
            4.Расчет бонуса операторский блок Gi
          </h2>

          <table className="w-full border-collapse overflow-hidden rounded-2xl border border-white/20 shadow-[0_8px_22px_rgba(0,0,0,0.22)]">
            <thead>
              <tr>
                <th className={`${blueHead} w-[24%]`}>РАЗМЕР ВЫПЛАТЫ</th>
                <th className={blueHead}>УСЛОВИЯ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={borderCell}>5% базовая ставка</td>
                <td className={borderCell}>Базовая ставка за GI</td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-[16px] font-extrabold text-[#1e1a08] md:text-[22px]`}
                >
                  15%
                </td>
                <td className={borderCell}>
                  При выполнении корректировок условий оператора, поданных
                  менеджером по операторскому блоку.
                </td>
              </tr>
              <tr>
                <td
                  className={`${borderCell} bg-[#b6a24f] text-[16px] font-extrabold text-[#1e1a08] md:text-[22px]`}
                >
                  20%
                </td>
                <td className={borderCell}>Gi&gt;=95%,&nbsp; MNP =100%</td>
              </tr>
              <tr>
                <td className={borderCell}>30%</td>
                <td className={borderCell}>
                  Gi&gt;=101%,&nbsp; MNP =100%, ФТП=91%&nbsp; ( ТП «Мой Онлайн
                  +», ТП «Супер Онлайн +», ТП «Везде Онлайн», TP Black, ТП
                  «Премиум ».)
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </AppShell>
  );
}
