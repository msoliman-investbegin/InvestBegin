import React, { useState } from 'react';

const BlogPageComponent = () => {
  // Define sample blog data
  const blogs: any = [
    {
      id: 1,
      title: 'Forex Trading meistern: Ein Leitfaden für EUR/USD, eToro Demo und Plus500 WebTrader',
      author: '',
      date: 'June 10, 2024',
      image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
      content: `Der Online-Devisenhandel ist sowohl für Anfänger als auch für erfahrene Händler immer zugänglicher geworden. Das Währungspaar EUR/USD ist aufgrund seiner Liquidität und seines Gewinnpotenzials eine der beliebtesten Optionen auf dem Devisenmarkt. Bevor Sie jedoch einsteigen, ist es wichtig, die Ihnen zur Verfügung stehenden Tools wie eToro Demo und Plus500 WebTrader zu verstehen.
      
      eToro, eine bekannte Plattform für Deviseninvestitionen, bietet ein Demokonto, mit dem Sie den Handel üben können, ohne echtes Geld zu riskieren. Dieses wertvolle Instrument hilft Anfängern, Vertrauen aufzubauen und die Besonderheiten des Forex-Marktes zu verstehen.
      
      Ein weiterer Top-Anwärter in der Welt des Internethandels ist Plus500 WebTrader. Seine benutzerfreundliche Oberfläche und seine robusten Funktionen machen ihn zu einer ausgezeichneten Wahl sowohl für Anfänger als auch für fortgeschrittene Trader. Mit dieser Plattform können Sie problemlos auf EUR/USD und andere Forex-Paare zugreifen.
      
      Wer in Devisen investieren will, muss die Kunst der Analyse und des Risikomanagements beherrschen. Die Kombination aus  Verstehen von Devisen wie EUR/USD, eToro Demo und Plus500 WebTrader kann Ihre Forex-Reise grundlegend verändern. Beginnen Sie damit, Ihre Fähigkeiten auf einem Demokonto zu verfeinern, lernen Sie die Dynamik des EUR/USD-Paares kennen und nutzen Sie die benutzerfreundlichen Web-Handelsplattformen, um Ihren Handelserfolg zu steigern.
      
      Zusammenfassend lässt sich sagen, dass der Online-Devisenhandel ein spannendes und potenziell lukratives Unterfangen ist. Egal, ob Sie ein erfahrener Händler oder ein Anfänger sind, eToro und Plus500 WebTrader bieten die idealen Werkzeuge, um die Welt des Devisenhandels zu erkunden und das EUR/USD-Paar zu meistern.
      `,
    },
    {
      id: 2,
      title: 'ETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
      author: '',
      date: 'June 23, 2024',
      image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
      content: `
      
In den letzten Jahren hat die Beliebtheit von Exchange Traded Funds (ETFs) unter Privatanlegern und institutionellen Investoren in Deutschland stark zugenommen. ETFs bieten eine einfache und kostengünstige Möglichkeit, in eine breite Palette von Vermögenswerten zu investieren. In diesem Blogbeitrag werden wir einen Blick darauf werfen, was ETFs sind, welche Vorteile sie bieten und wie man in sie investieren kann.

### Was sind ETFs?

ETFs sind Investmentfonds, die wie Aktien an der Börse gehandelt werden. Sie bilden die Wertentwicklung eines bestimmten Indexes, einer Branche, eines Rohstoffs oder eines anderen Vermögenswertes nach. Ein ETF kann beispielsweise den DAX, den MSCI World oder einen globalen Aktienindex abbilden. Dies ermöglicht es Anlegern, mit einem einzigen Investment eine breite Diversifikation zu erreichen.

### Vorteile von ETFs

1. **Diversifikation**: Mit einem ETF kann man in viele verschiedene Unternehmen oder Vermögenswerte gleichzeitig investieren. Dies reduziert das Risiko, das mit der Investition in einzelne Aktien oder Anleihen verbunden ist.

2. **Kosteneffizienz**: ETFs haben in der Regel niedrigere Gebühren als aktiv verwaltete Fonds, da sie passiv verwaltet werden und lediglich einen Index nachbilden. Dies bedeutet, dass keine teuren Fondsmanager benötigt werden, was die Kosten senkt.

3. **Liquidität**: Da ETFs an der Börse gehandelt werden, können sie jederzeit während der Handelszeiten gekauft und verkauft werden. Dies bietet den Anlegern eine hohe Flexibilität.

4. **Transparenz**: ETFs veröffentlichen in der Regel täglich ihre Bestände, sodass Anleger genau wissen, in welche Vermögenswerte sie investieren.

### Wie investiert man in ETFs?

1. **Konto eröffnen**: Um in ETFs zu investieren, benötigen Sie ein Wertpapierdepot bei einer Bank oder einem Online-Broker in Deutschland. Es gibt viele Anbieter, die unterschiedliche Gebührenstrukturen und Dienstleistungen anbieten.

2. **ETFs auswählen**: Wählen Sie ETFs aus, die zu Ihren Anlagezielen und Ihrer Risikobereitschaft passen. Berücksichtigen Sie dabei Faktoren wie die Performance des Index, die Kostenquote (TER), die Fondsgröße und die Liquidität des ETFs.

3. **Kauf und Verwaltung**: Nachdem Sie sich für einen ETF entschieden haben, können Sie diesen über Ihr Wertpapierdepot kaufen. Es ist wichtig, Ihre Investitionen regelmäßig zu überprüfen und gegebenenfalls anzupassen, um sicherzustellen, dass sie weiterhin Ihren Zielen entsprechen.

### Tipps für ETF-Anleger

- **Langfristiger Ansatz**: ETFs eignen sich besonders gut für langfristige Investments. Durch das regelmäßige Investieren und das Halten der ETFs über einen längeren Zeitraum können Anleger von Zinseszinsen und Marktgewinnen profitieren.

- **Kosten beachten**: Achten Sie auf die Gesamtkostenquote (TER) des ETFs. Niedrigere Kosten können sich langfristig positiv auf die Rendite auswirken.

- **Diversifikation nutzen**: Nutzen Sie die Möglichkeit der Diversifikation, indem Sie in verschiedene ETFs investieren, die unterschiedliche Regionen, Branchen oder Anlageklassen abbilden.

- **Regelmäßiges Rebalancing**: Überprüfen Sie regelmäßig Ihre Anlagestrategie und passen Sie Ihr Portfolio an, um das gewünschte Risikoprofil beizubehalten.

### ETF-Investitionen in Deutschland: Das sollten Sie wissen

Für deutsche Anleger bieten ETFs eine hervorragende Möglichkeit, eine breite Diversifikation mit niedrigen Kosten zu erreichen. Besonders beliebt sind ETFs, die den DAX, den MSCI World und andere wichtige Indizes abbilden. Zudem gibt es in Deutschland zahlreiche Online-Broker, die den Handel mit ETFs zu günstigen Konditionen ermöglichen.

### Fazit

ETFs sind eine hervorragende Möglichkeit für Anleger in Deutschland, eine breite Diversifikation mit niedrigen Kosten zu erreichen. Sie bieten Flexibilität, Transparenz und sind einfach zu handeln. Mit der richtigen Strategie und einem langfristigen Ansatz können ETFs ein wertvolles Instrument für den Vermögensaufbau sein.

Investieren Sie klug, bleiben Sie informiert und nutzen Sie die Vorteile, die ETFs bieten.
      `,
    },
    {
      id: 3,
      title: 'Die Vorteile einer Investition in NVIDIA-Aktien im Juni 2024: Ein Blick aus Deutschland',
      author: '',
      date: 'June 25, 2024',
      image: 'https://www.sysgen.de/media/image/ea/ff/2a/nvidia_logo_600x600.png', // Sample image URL
      content: `
      NVIDIA Corporation (NASDAQ: NVDA) hat sich kontinuierlich als Vorreiter in der Technologiebranche etabliert und seinen Anlegern beträchtliche Renditen geliefert. Im Juni 2024 bietet die NVIDIA-Aktie eine attraktive Investitionsmöglichkeit, die durch starke Fundamentaldaten, Marktführerschaft und strategische Initiativen gestützt wird. Hier sind einige Hauptgründe, warum eine Investition in NVIDIA-Aktien im Juni 2024 aus deutscher Sicht besonders vorteilhaft sein könnte.

1. Führungsrolle in Künstlicher Intelligenz und maschinellem Lernen
NVIDIAs wegweisende Arbeit in den Bereichen Künstliche Intelligenz (KI) und maschinelles Lernen (ML) treibt das Wachstum des Unternehmens kontinuierlich voran. Die GPUs des Unternehmens sind das Rückgrat der KI-Entwicklung und -Bereitstellung und dominieren sowohl den Verbraucher- als auch den Unternehmensmarkt. NVIDIAs KI-Plattformen werden in verschiedenen Sektoren, von der Gesundheitsversorgung bis zur Finanzbranche, weit verbreitet eingesetzt, was die entscheidende Rolle des Unternehmens in der aktuellen KI-Revolution unterstreicht. Da die KI-Technologie weiter voranschreitet, wird NVIDIA erheblich davon profitieren, was die Aktie zu einer vielversprechenden Investition macht.

2. Expansion im Data-Center-Markt
NVIDIAs Data-Center-Segment ist einer der am schnellsten wachsenden Geschäftsbereiche des Unternehmens. Die Nachfrage nach Datenverarbeitungskapazität ist mit der Verbreitung von Cloud Computing, Big Data und KI-Anwendungen sprunghaft angestiegen. NVIDIAs GPUs, insbesondere die Serien A100 und H100, sind für Hochleistungsrechenaufgaben unverzichtbar. Das Wachstum dieses Sektors wird voraussichtlich anhalten und eine robuste Einnahmequelle für NVIDIA darstellen, was die Attraktivität der Aktie weiter steigert.

3. Innovation in der Automobiltechnologie
Die Automobilindustrie durchläuft mit dem Übergang zu autonomen Fahrzeugen (AV) und Elektrofahrzeugen (EV) einen erheblichen Wandel. NVIDIAs DRIVE-Plattform steht an der Spitze dieser Revolution und bietet KI-gesteuerte Lösungen für AVs. Partnerschaften mit großen Automobilherstellern und Technologieunternehmen stärken NVIDIAs Position in diesem lukrativen Markt. Mit der Weiterentwicklung des Automobilsektors ist NVIDIA gut positioniert, um neue Chancen zu nutzen und den Aktienwert weiter zu steigern.

4. Stärke im Gaming- und Unterhaltungssektor
NVIDIAs GeForce-GPUs bleiben der Goldstandard in der Gaming-Industrie. Das Engagement des Unternehmens für Innovation stellt sicher, dass es weiterhin hochmoderne Grafiklösungen liefert und seine Dominanz im Gaming-Markt beibehält. Darüber hinaus bietet der Aufstieg von Virtual Reality (VR) und Augmented Reality (AR) neue Wachstumschancen. NVIDIAs Führungsrolle in der Grafiktechnologie und seine Fähigkeit, sich an neue Trends anzupassen, machen die Aktie zu einer vielversprechenden Investition.

5. Robuste finanzielle Leistung
NVIDIAs finanzielle Leistung ist beeindruckend und zeichnet sich durch starkes Umsatzwachstum und Rentabilität aus. Die Fähigkeit des Unternehmens, erheblichen freien Cashflow zu generieren, ermöglicht strategische Investitionen in Forschung und Entwicklung, Akquisitionen und Aktionärsrenditen durch Dividenden und Aktienrückkäufe. Eine solide Bilanz und eine konsistente Erfolgsbilanz verstärken das Vertrauen der Anleger in die langfristigen Aussichten von NVIDIA.

6. Strategische Akquisitionen und Partnerschaften
NVIDIAs strategische Akquisitionen, wie die Übernahme von Arm Holdings, und Partnerschaften mit Branchenriesen haben die technologischen Fähigkeiten und die Marktreichweite des Unternehmens gestärkt. Diese strategischen Schritte positionieren NVIDIA, um Synergien zu nutzen, das Produktangebot zu erweitern und neue Märkte zu erschließen. Solche Initiativen werden voraussichtlich zukünftiges Wachstum fördern und den Aktionären beträchtliche Renditen bringen.

7. Nachhaltigkeit und ESG-Initiativen
NVIDIA ist dem Thema Nachhaltigkeit verpflichtet und hat erhebliche Fortschritte in seinen Umwelt-, Sozial- und Governance-Bemühungen (ESG) gemacht. Der Fokus des Unternehmens auf energieeffiziente Produkte, nachhaltige Praktiken und soziale Verantwortung entspricht dem zunehmenden Schwerpunkt auf ESG-Kriterien bei Investoren. Dieses Engagement verbessert nicht nur das Unternehmensimage von NVIDIA, sondern zieht auch eine breitere Basis sozialbewusster Anleger an.

Fazit
Eine Investition in NVIDIA-Aktien im Juni 2024 bietet eine Vielzahl von Vorteilen, die auf der Führungsrolle des Unternehmens in KI und ML, der Expansion in den Data-Center- und Automobilmärkten, der Stärke im Gaming-Bereich, der robusten finanziellen Leistung, strategischen Initiativen und dem Engagement für Nachhaltigkeit beruhen. NVIDIAs Fähigkeit zur Innovation und Anpassung an neue Trends stellt sicher, dass es ein bedeutender Akteur in der Technologiebranche bleibt, wodurch die Aktie zu einer äußerst attraktiven Investitionsmöglichkeit wird. Da sich die technologische Landschaft weiter entwickelt, ist NVIDIA gut positioniert, um seinen Anlegern beträchtliche Renditen zu liefern, was den Zeitpunkt jetzt besonders günstig macht, um NVIDIA-Aktien in Ihr Anlageportfolio aufzunehmen.
      `,
    },
    {
      id: 4,
      title: 'Die Vorteile einer Investition in Bitcoin im Juni 2024: Ein Fokus auf Deutschland',
      author: '',
      date: 'June 26, 2024',
      image: 'https://www.brookings.edu/wp-content/uploads/2021/06/shutterstock_1708749826_small.jpg', // Sample image URL
      content: `
      Bitcoin, die weltweit führende Kryptowährung, hat seit ihrer Einführung im Jahr 2009 eine bemerkenswerte Entwicklung durchgemacht. Im Juni 2024 bietet eine Investition in Bitcoin für deutsche Anleger eine Vielzahl von Vorteilen. Hier sind einige der wichtigsten Gründe, warum sich jetzt ein Einstieg in den Bitcoin-Markt lohnen könnte.

1. Inflationsschutz und Wertspeicher
In Zeiten wirtschaftlicher Unsicherheit und steigender Inflation suchen viele Anleger nach Möglichkeiten, ihr Vermögen zu schützen. Bitcoin hat sich als "digitales Gold" etabliert, das gegen inflationäre Risiken immun ist. Da Bitcoin eine begrenzte Gesamtmenge von 21 Millionen Einheiten hat, bietet es einen eingebauten Schutz gegen die Entwertung durch unkontrollierte Geldschöpfung. Für deutsche Anleger, die nach sicheren Anlagen suchen, kann Bitcoin eine attraktive Option sein, um ihr Portfolio zu diversifizieren und vor Inflation zu schützen.

2. Stärkere regulatorische Klarheit in Deutschland
Deutschland hat sich als einer der fortschrittlichsten Märkte für Kryptowährungen in Europa positioniert. Mit klaren regulatorischen Rahmenbedingungen und einer positiven Haltung gegenüber digitalen Vermögenswerten bietet Deutschland eine stabile Umgebung für Investitionen in Bitcoin. Die BaFin (Bundesanstalt für Finanzdienstleistungsaufsicht) hat Maßnahmen ergriffen, um den Markt zu regulieren und sicherzustellen, dass Anleger geschützt sind. Diese Klarheit schafft Vertrauen und macht Bitcoin-Investitionen für deutsche Anleger sicherer und attraktiver.

3. Technologische Innovation und Akzeptanz
Die Akzeptanz von Bitcoin und anderen Kryptowährungen nimmt weltweit zu, und Deutschland bildet dabei keine Ausnahme. Immer mehr Unternehmen und Einzelhändler akzeptieren Bitcoin als Zahlungsmittel, und die technologische Infrastruktur entwickelt sich stetig weiter. Mit der zunehmenden Verbreitung von Bitcoin-ATMs und benutzerfreundlichen Wallets wird der Zugang zu Bitcoin für deutsche Anleger immer einfacher. Diese wachsende Akzeptanz und technologische Innovation machen Bitcoin zu einer zukunftsorientierten Investition.

4. Wachstumspotenzial und Rendite
Bitcoin hat in der Vergangenheit erhebliche Renditen erzielt und bleibt ein Anlageinstrument mit hohem Wachstumspotenzial. Trotz seiner Volatilität haben langfristige Investoren oft beträchtliche Gewinne verzeichnet. Da immer mehr institutionelle Anleger in den Bitcoin-Markt eintreten und die Nachfrage steigt, könnte der Wert von Bitcoin weiter steigen. Für deutsche Anleger, die bereit sind, das Risiko zu akzeptieren, bietet Bitcoin die Möglichkeit, hohe Renditen zu erzielen.

5. Dezentrale Finanzmärkte (DeFi) und Innovation
Die Entwicklung von dezentralen Finanzmärkten (DeFi) hat das Potenzial von Bitcoin und anderen Kryptowährungen erheblich erweitert. DeFi-Plattformen ermöglichen es Nutzern, Finanzdienstleistungen wie Kredite, Versicherungen und Handel ohne traditionelle Finanzintermediäre zu nutzen. Deutschland, mit seiner starken Fintech-Szene, ist gut positioniert, um von diesen Innovationen zu profitieren. Eine Investition in Bitcoin könnte deutschen Anlegern Zugang zu diesen dynamischen und wachsenden Märkten verschaffen.

6. Steuerliche Vorteile
Die steuerliche Behandlung von Bitcoin in Deutschland kann für Anleger vorteilhaft sein. Nach deutschem Steuerrecht sind Gewinne aus dem Verkauf von Bitcoin nach einer Haltefrist von mehr als einem Jahr steuerfrei. Diese Regelung macht Bitcoin besonders attraktiv für langfristig orientierte Anleger, die von potenziellen Kursgewinnen profitieren möchten, ohne diese versteuern zu müssen.

Fazit
Eine Investition in Bitcoin im Juni 2024 bietet deutschen Anlegern zahlreiche Vorteile. Als Inflationsschutz, durch klare regulatorische Rahmenbedingungen, zunehmende Akzeptanz und technologische Innovation, hohes Wachstumspotenzial, Zugang zu DeFi-Märkten und steuerliche Vorteile ist Bitcoin eine vielversprechende Ergänzung für jedes Anlageportfolio. Angesichts der sich ständig weiterentwickelnden Finanzlandschaft und der wachsenden Bedeutung digitaler Vermögenswerte könnte jetzt ein idealer Zeitpunkt sein, um in Bitcoin zu investieren und von den langfristigen Chancen dieser revolutionären Technologie zu profitieren.
      `,
    },
    // {
    //   id: 5,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 6,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 7,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // }
    // Add more blogs as needed
     // {
    //   id: 3,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 4,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 5,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 6,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 7,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // }
     // {
    //   id: 3,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 4,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 5,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 6,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 7,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // }
     // {
    //   id: 3,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 4,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 5,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 6,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 7,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // }
     // {
    //   id: 3,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 4,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 5,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 6,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 7,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // }
     // {
    //   id: 3,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 4,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 5,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 6,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // },
    // {
    //   id: 7,
    //   title: 'BETF-Investitionen: Eine Einführung für Anfänger in Deutschland',
    //   author: '',
    //   date: 'June 23, 2024',
    //   image: 'https://academy.education.investing.com/wp-content/uploads/2023/04/plus-500.jpg', // Sample image URL
    //   content: `
      
    //   `,
    // }

  ];

  // State to keep track of selected blog
  const [selectedBlog, setSelectedBlog] = useState<any>(blogs[0]);

  // Function to handle blog selection
  const handleBlogSelect = (blogId: any) => {
    setSelectedBlog(blogs.find((blog: any) => blog.id === blogId));
  };

  // Function to handle closing the blog details
  const handleCloseDetails = () => {
    setSelectedBlog(null);
  };

  return (
    <div className='py-10 lg:mt-10'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Blog List */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-lg shadow sticky top-20'>
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-gray-900 mb-4'>Latest Blogs</h3>
                <div className='space-y-4'>
                  {blogs.map((blog: any) => (
                    <div key={blog.id} className='flex items-center space-x-4 cursor-pointer' onClick={() => handleBlogSelect(blog.id)}>
                      <img src={blog.image} alt={blog.title} className='w-16 h-16 rounded-md' />
                      <div>
                        <h4 className='text-lg font-semibold text-gray-900'>{blog.title}</h4>
                        <p className='text-sm text-gray-600'>{blog.author} | {blog.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Blog Details */}
          <div className='lg:col-span-2 overflow-y-auto h-screen'>
            {selectedBlog ? (
              <div className='bg-white rounded-lg shadow'>
                <div className='p-6'>
                  <h2 className='text-2xl font-semibold text-gray-900 mb-4'>{selectedBlog.title}</h2>
                  <p className='text-sm text-gray-600 mb-2'>{selectedBlog.author} | {selectedBlog.date}</p>
                  <img src={selectedBlog.image} alt={selectedBlog.title} className='mb-4 rounded-md' />
                  <p className='text-gray-700'>{selectedBlog.content}</p>
                  <button
                    onClick={handleCloseDetails}
                    className='mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center'
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div className='bg-white rounded-lg shadow p-6'>
                <h2 className='text-2xl font-semibold text-gray-900 mb-4'>Select a blog to read</h2>
                <p className='text-gray-700'>Please click on a blog title from the list to view its details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default BlogPageComponent