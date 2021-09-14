import React from 'react'
import styled from 'styled-components'
import { CircleDot } from 'src/components/AppLayout/Header/components/CircleDot'
import { ETHEREUM_NETWORK } from 'src/config/networks/network.d'
import { getNetworkLabel } from 'src/config'

interface Props {
  chainId: ETHEREUM_NETWORK
  noLabel?: boolean
}

const Wrapper = styled.span`
  & > svg {
    font-size: 1.08em;
    vertical-align: text-bottom;
    margin-right: 0.15em;
  }
}
`

const ChainIndicator = ({ chainId, noLabel }: Props): React.ReactElement => {
  return (
    <Wrapper>
      <CircleDot networkId={chainId} />
      {!noLabel && getNetworkLabel(chainId)}
    </Wrapper>
  )
}

export default ChainIndicator
