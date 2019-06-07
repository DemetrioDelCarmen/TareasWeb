<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
<h2>Lista de personas</h2>
<table border="1">
<tr bgcolor="">
<th style="text-align:center text-color:red">Nombre</th>
<th style="text-align:center">Fecha de nacimiento</th>
<th style="text-align:center">Genero</th>
</tr>
<xsl:for-each select="lista_personas/persona">
<tr>
<td><xsl:value-of select="nombre"/></td>
<td><xsl:value-of select="fecha_nacimiento"/></td>
<td><xsl:value-of select="genero"/></td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>