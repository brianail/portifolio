import pandas as pd
import re
from datetime import datetime
import math
import sys
import os

def processar_planilha(caminho_arquivo, formato_saida='xlsx'):
    if not os.path.exists(caminho_arquivo):
        print(f"Erro: O arquivo '{caminho_arquivo}' não foi encontrado.")
        return

    print(f"Lendo o arquivo: {caminho_arquivo}")
    try:
        # Tenta ler sem cabeçalho, já que a imagem não mostra cabeçalho
        df = pd.read_excel(caminho_arquivo, header=None)
    except Exception as e:
        print(f"Erro ao ler o arquivo: {e}")
        return

    # Verifica quantas colunas tem e renomeia
    # Assumindo que A=0 (IMEI), B=1 (Data Inicial), C=2 (Data Final)
    if len(df.columns) >= 2:
        df.rename(columns={0: 'IMEI', 1: 'Data_Inicial'}, inplace=True)
    else:
        print("A planilha não tem as colunas esperadas (mínimo de 2 colunas).")
        return
        
    if len(df.columns) == 2:
        df['Data_Final'] = pd.NA
    else:
        df.rename(columns={2: 'Data_Final'}, inplace=True)
        # Remove colunas extras se houver
        df = df[['IMEI', 'Data_Inicial', 'Data_Final']]

    # 1. Limpar IMEI (remover pontos, espaços, e manter apenas números)
    # Na linha 123 da imagem dá pra ver um IMEI com ponto no final
    df['IMEI'] = df['IMEI'].astype(str).str.replace(r'\D', '', regex=True)

    # Formatar o IMEI para o padrão do sistema (XXX.XXX.XXX.XXX.XXX)
    def formatar_imei(imei):
        if len(imei) >= 15:
            return f"{imei[0:3]}.{imei[3:6]}.{imei[6:9]}.{imei[9:12]}.{imei[12:15]}"
        return imei

    df['IMEI'] = df['IMEI'].apply(formatar_imei)

    # 2. Extrair apenas a data da coluna Data_Inicial (remover "A partir de ")
    def extrair_data(texto):
        texto = str(texto)
        match = re.search(r'(\d{2}/\d{2}/\d{4})', texto)
        if match:
            return match.group(1)
        return texto

    df['Data_Inicial'] = df['Data_Inicial'].apply(extrair_data)

    # 3. Preencher Data_Final com a data de hoje se estiver vazia
    data_hoje = datetime.now().strftime('%d/%m/%Y')
    
    # Pergunta ao usuário se deseja preencher com a data de hoje ou digitar uma data
    usar_hoje = input(f"A data final padrão será a de hoje ({data_hoje}). Pressione ENTER para confirmar, ou digite uma data manualmente (DD/MM/YYYY): ").strip()
    if usar_hoje != "":
        data_hoje = usar_hoje
        
    df['Data_Final'] = df['Data_Final'].fillna(data_hoje)

    # 4. Fatiar em blocos de 700
    tamanho_lote = 700
    total_lotes = math.ceil(len(df) / tamanho_lote)

    print(f"\nTotal de registros lidos: {len(df)}.")
    print(f"Dividindo em {total_lotes} arquivo(s) de até {tamanho_lote} registros...")

    for i in range(total_lotes):
        inicio = i * tamanho_lote
        fim = inicio + tamanho_lote
        df_fatiado = df.iloc[inicio:fim]
        
        nome_arquivo_saida = f"lote_imeis_{i+1}.{formato_saida}"
        
        if formato_saida == 'xlsx':
            df_fatiado.to_excel(nome_arquivo_saida, index=False, header=False)
        elif formato_saida == 'csv':
            df_fatiado.to_csv(nome_arquivo_saida, index=False, header=False, sep=';')
            
        print(f" -> Criado arquivo: {nome_arquivo_saida} com {len(df_fatiado)} registros.")
        
    print("Processamento concluído com sucesso!")

if __name__ == "__main__":
    print("=== Processador e Fatiador de IMEIs ===")
    arquivo = input("Digite o caminho do arquivo Excel (.xlsx) de origem: ").strip()
    
    formato = input("Qual o formato de saída desejado? (xlsx/csv) [padrão: xlsx]: ").strip().lower()
    if formato not in ['xlsx', 'csv']:
        formato = 'xlsx'
        
    processar_planilha(arquivo, formato)
