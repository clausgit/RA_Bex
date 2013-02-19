
var global_bex = {}



global_bex.load_content = function(){
	
	$global_content = {
		header21: 'Vollmachten',
	    21: '<a data-role="button"  data-theme="a" data-icon="arrow-r" data-iconpos="right" class="button" data-transition="none" href="http://www.rechtsanwalt-bex.de/downloads/strafprozessvollmacht-rechtsanwalt-bex.pdf" rel="external" target="_blank">Strafprozessvollmacht öffnen</a>\
		<a data-role="button"  data-theme="a" data-icon="arrow-r" data-iconpos="right" class="button" data-transition="none" href="http://www.rechtsanwalt-bex.de/downloads/prozessvollmacht-rechtsanwalt-bex.pdf" rel="external" target="_blank">Prozessvollmacht öffnen</a>\
			<h3>Hinweis zur Strafprozessvollmacht</h3>\
			Insbesondere in Strafsachen hat es sich als zweckmäßig erwiesen, dass von der Mandantschaft zwei Strafprozessvollmachten unterzeichnet werden. Ein Exemplar wird regelmäßig mit der Vertretungsanzeige oder/und mit dem Antrag auf Akteneinsicht zu den Verfahrensakten gereicht. Das zweite Vollmachtsexemplar wird Bestandteil der anwaltlichen Handakte, da der Verteidiger sich nicht nur in einem Notfall, wie vorläufige Festnahme oder Verhaftung, legitimieren kann, sondern auch gegenüber Zeugen und Sachverständigen, die er befragt oder beauftragt, seine Bevollmächtigung nachweisen kann. Durch Zusendung der ausgefüllten, ausgedruckten und unterzeichneten Strafprozessvollmacht kommt selbstverständlich kein Mandatsvertrag zustande. Die hier zur Verfügung gestellte.<br>\
			Möglichkeit dient lediglich der Erleichterung der Anbahnung eines Mandatsvertrages. Der Abschluss des Mandatsvertrages steht unter der Bedingung, dass das in der Zusendung der unterzeichneten Vollmacht liegende Angebot zum Abschluss des Mandatsvertrages vom Rechtsanwalt angenommen und schriftlich bestätigt worden ist. <br>\
			<br>\
			<h3>Hinweis zur Prozessvollmacht</h3>\
			Durch Zusendung der ausgefüllten, ausgedruckten und unterzeichneten Prozessvollmacht kommt selbstverständlich kein Mandatsvertrag zustande. Die hier zur Verfügung gestellte Möglichkeit dient lediglich der Erleichterung der Anbahnung eines Mandatsvertrages. Der Abschluss des Mandatsvertrages steht unter der Bedingung, dass das in der Zusendung der unterzeichneten Vollmacht liegende Angebot zum Abschluss des Mandatsvertrages von Rechtsanwalt angenommen und schriftlich bestätigt worden ist.',
		header22: 'Dokumente',
		22: '<select  data-theme="a" name="select_document" id="select_document" ><option>Bitte wählen Sie ein Dokument:</option>\
		<option value="http://www.rechtsanwalt-bex.de/downloads/Verguetungsvereinbarung-Prozess-Rechtsanwalt-Bex.pdf">Vergütungsvereinbarung Prozess öffnen</option>\
		<option value="http://www.rechtsanwalt-bex.de/downloads/Verguetungsvereinbarung-Prozess-Rechtsanwalt-Bex.pdf">Vergütungsvereinbarung aussergerichtlich öffnen</option>\
		<option value="http://www.rechtsanwalt-bex.de/downloads/Verguetungsvereinbarung-Prozess-Rechtsanwalt-Bex.pdf">Gebührenvereinbarung Beratungstätigkeit öffnen</option>\
		<option value="http://www.rechtsanwalt-bex.de/downloads/Verguetungsvereinbarung-Prozess-Rechtsanwalt-Bex.pdf">Entbindungserklärung öffnen</option>\
		<option value="http://www.rechtsanwalt-bex.de/downloads/Verguetungsvereinbarung-Prozess-Rechtsanwalt-Bex.pdf">Mandantenauskunft öffnen</option>\
		<option value="http://www.rechtsanwalt-bex.de/downloads/Verguetungsvereinbarung-Prozess-Rechtsanwalt-Bex.pdf">Zeugenentschädigungsverzichtserklärung öffnen</option>\
		<option value="http://www.rechtsanwalt-bex.de/downloads/Verguetungsvereinbarung-Prozess-Rechtsanwalt-Bex.pdf">Abtretungserklärung öffnen</option>\
		<option value="http://www.rechtsanwalt-bex.de/downloads/Verguetungsvereinbarung-Prozess-Rechtsanwalt-Bex.pdf">Untervollmacht öffnen</option></select>\
			<h3>Hinweis zu den Vergütungsvereinbarungen und der Gebührenvereinbarung:</h3>\
			Die jeweilige Vergütungsvereinbarung bzw. Gebührenvereinbarung wird erst nach beiderseitiger Unterzeichnung wirksam. Der Mandantschaft wird nach beiderseitiger Unterzeichnung eine Fotokopie der Vergütungsvereinbarung zugeleitet. <br>\
			Hinweis zur Entbindungserklärung:</h3>\
			Die Entbindung des behandelnden Arztes oder mehrere behandelnder Ärzte von der ärztlichen Schweigepflicht mit der Entbindungserklärung ist bei der Geltendmachung von Ansprüchen auf Schmerzensgeld bei einem Verkehrsunfall sinnvoll, da durch die unmittelbare Vorlage bei dem Versicherer der Gegenseite Zeit gewonnen werden kann. <br>\
			<h3>Hinweis zur Mandantenauskunft:</h3>\
			Mit der Mandatserteilung werden von Ihnen verschiedene Daten benötigt. Sie können hier bereits ein Formular ausdrucken, das Sie ausgefüllt zum ersten Besprechungstermin mitbringen oder Rechtsanwalt Bex zuschicken. Wir benötigen auf jeden Fall Angaben über Ihre Erreichbarkeit. <br>\
			Hinweis zur Zeugenentschädigungsverzichtserklärung:<br>\
			Sollten Sie in einem gerichtlichen Verfahren die Beweislast für die Ihre Behauptung tragen und liegt ein Beweisbeschluss des Gerichts vor, nach dem Ihre Zeugen vernommen werden sollen, können Sie die Zahlung eines Vorschusses auf die zu erwartende Zeugenentschädigung (ca. 50,00 Euro) vermeiden, wenn jeder Ihrer Zeugen die hier hinterlegte Zeugenentschädigungsverzichtserklärung ausfüllt und unterschrieben an Rechtsanwalt Bex schickt. Diese wird dann von hier aus an das Gericht weitergeleitet.<br>\
			<h3>Hinweis zur Abtretungserklärung:</h3>\
			Mit der Abtretungserklärung ist es der Staatskasse z.B. im Falle eines Freispruchs nicht möglich mit Ansprüchen gegen Ihren Kostenerstattungsanspruch hinsichtlich der notwendigen Auslagen aufzurechnen.<h3>Hinweis zu den Vergütungsvereinbarungen und der Gebührenvereinbarung:</h3>\
			Die jeweilige Vergütungsvereinbarung bzw. Gebührenvereinbarung wird erst nach beiderseitiger Unterzeichnung wirksam. Der Mandantschaft wird nach beiderseitiger Unterzeichnung eine Fotokopie der Vergütungsvereinbarung zugeleitet. <br>\
			Hinweis zur Entbindungserklärung:</h3>\
			Die Entbindung des behandelnden Arztes oder mehrere behandelnder Ärzte von der ärztlichen Schweigepflicht mit der Entbindungserklärung ist bei der Geltendmachung von Ansprüchen auf Schmerzensgeld bei einem Verkehrsunfall sinnvoll, da durch die unmittelbare Vorlage bei dem Versicherer der Gegenseite Zeit gewonnen werden kann. <br>\
			<h3>Hinweis zur Mandantenauskunft:</h3>\
			Mit der Mandatserteilung werden von Ihnen verschiedene Daten benötigt. Sie können hier bereits ein Formular ausdrucken, das Sie ausgefüllt zum ersten Besprechungstermin mitbringen oder Rechtsanwalt Bex zuschicken. Wir benötigen auf jeden Fall Angaben über Ihre Erreichbarkeit. <br>\
			Hinweis zur Zeugenentschädigungsverzichtserklärung:<br>\
			Sollten Sie in einem gerichtlichen Verfahren die Beweislast für die Ihre Behauptung tragen und liegt ein Beweisbeschluss des Gerichts vor, nach dem Ihre Zeugen vernommen werden sollen, können Sie die Zahlung eines Vorschusses auf die zu erwartende Zeugenentschädigung (ca. 50,00 Euro) vermeiden, wenn jeder Ihrer Zeugen die hier hinterlegte Zeugenentschädigungsverzichtserklärung ausfüllt und unterschrieben an Rechtsanwalt Bex schickt. Diese wird dann von hier aus an das Gericht weitergeleitet.<br>\
			<h3>Hinweis zur Abtretungserklärung:</h3>\
			Mit der Abtretungserklärung ist es der Staatskasse z.B. im Falle eines Freispruchs nicht möglich mit Ansprüchen gegen Ihren Kostenerstattungsanspruch hinsichtlich der notwendigen Auslagen aufzurechnen.'

			
			
			
			};

}



